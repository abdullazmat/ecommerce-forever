import express from "express";
import { addOrder, getAllOrders } from "../controllers/order.controller.js";

const router = express.Router();

router.route("/add").post(addOrder);
router.route("/get").get(getAllOrders);

export default router;
