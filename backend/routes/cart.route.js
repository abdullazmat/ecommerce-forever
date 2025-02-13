import express from "express";
import {
  addItem,
  getCartItems,
  deleteCartItem,
  updateCartItem,
  deleteAllCartItem,
} from "../controllers/cart.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/add").post(isAuthenticated, addItem);
router.route("/get").get(isAuthenticated, getCartItems);
router.route("/delete/:id").delete(isAuthenticated, deleteCartItem);
router.route("/update/:id").put(isAuthenticated, updateCartItem);
router.route("/delete").delete(isAuthenticated, deleteAllCartItem);

export default router;
