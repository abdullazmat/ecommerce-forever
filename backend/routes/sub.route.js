import express from "express";
import { addtoSubscribe } from "../controllers/subs.controller.js";

const router = express.Router();

router.route("/subscribe").post(addtoSubscribe);

export default router;
