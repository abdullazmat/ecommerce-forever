import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
  getProductById,
} from "../controllers/product.controller.js";
import adminAuthenticated from "../middlewares/adminAuthenticated.js";
import { multipleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/add").post(adminAuthenticated, multipleUpload, addProduct);
router.route("/get").get(getProducts);
router.route("/get/:id").get(getProductById);
router.route("/delete/:id").delete(adminAuthenticated, deleteProduct);

export default router;
