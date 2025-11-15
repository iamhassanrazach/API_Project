import db from "../config/database.js";

export class Restaurant {
	static createTable() {
		db.prepare(`
            CREATE TABLE IF NOT EXISTS restaurants (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                cuisine TEXT NOT NULL,
                location TEXT NOT NULL,
                rating REAL DEFAULT 0,
                priceRange TEXT
            )
        `).run();
	}

	static getAll() {
		return db.prepare("SELECT * FROM restaurants").all();
	}

	static getById(id) {
		return db.prepare("SELECT * FROM restaurants WHERE id = ?").get(id);
	}

	static create({ name, cuisine, location, rating, priceRange }) {
		return db.prepare(
			`INSERT INTO restaurants (name, cuisine, location, rating, priceRange)
             VALUES (?, ?, ?, ?, ?)`
		).run(name, cuisine, location, rating, priceRange);
	}

	static update(id, { name, cuisine, location, rating, priceRange }) {
		return db.prepare(
			`UPDATE restaurants 
             SET name=?, cuisine=?, location=?, rating=?, priceRange=?
             WHERE id=?`
		).run(name, cuisine, location, rating, priceRange, id);
	}

	static delete(id) {
		return db.prepare("DELETE FROM restaurants WHERE id = ?").run(id);
	}
}