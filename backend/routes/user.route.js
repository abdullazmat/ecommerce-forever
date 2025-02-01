import express from "express";
import {
  register,
  updateProfile,
  login,
  logout,
  getUserById,
  forgetPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/signup").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .put(isAuthenticated, singleUpload, updateProfile);
router.route("/user/:id").get(isAuthenticated, getUserById);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password/:token").put(resetPassword);

export default router;
