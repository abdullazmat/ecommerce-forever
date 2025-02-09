import express from "express";
import { addItem, getCartItems } from "../controllers/cart.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/add").post(addItem);
router.route("/get").get(getCartItems);

export default router;
