import express from "express";
import { login, logout, register } from "../controllers/admin.controller.js";
import admminAuthenticated from "../middlewares/adminAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
