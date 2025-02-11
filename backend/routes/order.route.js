import express from "express";
import {
  addOrder,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";

const router = express.Router();

router.route("/add").post(addOrder);
router.route("/get").get(getAllOrders);
router.route("/update/:id").put(updateOrderStatus);

export default router;
