import express from "express";
import {
	getAllRestaurants,
	getRestaurantById,
	createRestaurant,
	updateRestaurant,
	deleteRestaurant
} from "../controllers/restaurantController.js";

export const restaurantRouter = express.Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurantById);
restaurantRouter.post("/", createRestaurant);
restaurantRouter.put("/:id", updateRestaurant);
restaurantRouter.delete("/:id", deleteRestaurant);
