import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import config from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine database path
let dbPath;

if (path.isAbsolute(config.databaseUrl)) {
	// Production: absolute path (Render / Railway volume mount)
	dbPath = config.databaseUrl;
} else {
	// Development: relative path
	dbPath = path.join(__dirname, "../../", config.databaseUrl);
}

console.log(`📊 Database path: ${dbPath}`);

// Open SQLite database
const db = new Database(dbPath);

// Enable foreign key constraints
db.pragma("foreign_keys = ON");

// Initialize all tables
export const initializeDatabase = async () => {
	console.log("🔧 Initializing database...");

	const User = (await import("../models/User.js")).default;
	const { Restaurant } = await import("../models/Restaurant.js");

	// Create tables
	User.createTable();
	Restaurant.createTable();

	// Seed in development
	if (config.isDevelopment()) {
		User.seed();
		if (Restaurant.seed) Restaurant.seed(); // Optional seed function
	}

	console.log("✅ Database initialization complete");
};

export default db;
export { db };
