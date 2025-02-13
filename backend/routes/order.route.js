import express from "express";
import {
  addOrder,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/add").post(isAuthenticated, addOrder);
router.route("/get").get(isAuthenticated, getAllOrders);
router.route("/update/:id").put(updateOrderStatus);

export default router;
