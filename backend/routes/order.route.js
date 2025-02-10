import express from "express";
import { addOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.route("/add").post(addOrder);

export default router;
