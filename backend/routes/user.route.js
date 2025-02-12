import express from "express";
import {
  register,
  login,
  logout,
  getUserById,
  forgetPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/signup").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/:id").get(getUserById);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password/:token").put(resetPassword);

export default router;
