import { RestaurantService } from "../services/restaurantService.js";

export const getAllRestaurants = (req, res) => {
	const restaurants = RestaurantService.getAllRestaurants();
	res.json(restaurants);
};

export const getRestaurantById = (req, res) => {
	const restaurant = RestaurantService.getRestaurantById(req.params.id);
	res.json(restaurant);
};

export const createRestaurant = (req, res) => {
	RestaurantService.createRestaurant(req.body);
	res.json({ message: "Restaurant created" });
};

export const updateRestaurant = (req, res) => {
	RestaurantService.updateRestaurant(req.params.id, req.body);
	res.json({ message: "Restaurant updated" });
};

export const deleteRestaurant = (req, res) => {
	RestaurantService.deleteRestaurant(req.params.id);
	res.json({ message: "Restaurant deleted" });
};
