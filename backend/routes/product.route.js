import express from "express";
import { addProduct } from "../controllers/product.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { multipleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/add").post(multipleUpload, addProduct);

export default router;
