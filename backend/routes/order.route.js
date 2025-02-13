import express from "express";
import {
  addOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import admminAuthenticated from "../middlewares/adminAuthenticated.js";

const router = express.Router();

router.route("/add").post(isAuthenticated, addOrder);
router.route("/get").get(isAuthenticated, getUserOrders);
router.route("/get/all").get(admminAuthenticated, getAllOrders);
router.route("/update/:id").put(admminAuthenticated, updateOrderStatus);

export default router;
