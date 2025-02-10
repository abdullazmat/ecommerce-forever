import express from "express";
import {
  addItem,
  getCartItems,
  deleteCartItem,
  updateCartItem,
} from "../controllers/cart.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/add").post(addItem);
router.route("/get").get(getCartItems);
router.route("/delete/:id").delete(deleteCartItem);
router.route("/update/:id").put(updateCartItem);

export default router;
