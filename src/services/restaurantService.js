import { Restaurant } from "../models/Restaurant.js";

export class RestaurantService {
	static getAllRestaurants() {
		return Restaurant.getAll();
	}

	static getRestaurantById(id) {
		return Restaurant.getById(id);
	}

	static createRestaurant(data) {
		return Restaurant.create(data);
	}

	static updateRestaurant(id, data) {
		return Restaurant.update(id, data);
	}

	static deleteRestaurant(id) {
		return Restaurant.delete(id);
	}
}
