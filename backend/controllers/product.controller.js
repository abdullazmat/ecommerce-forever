import { Product } from "../models/product.model.js";
import dotenv from "dotenv";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

dotenv.config();

// Add product Controller
export const addProduct = async (req, res) => {
  try {
    let {
      productName,
      size,
      price,
      description,
      category,
      subCategory,
      bestSeller,
    } = req.body;

    // ✅ Convert `size` from string to an array
    try {
      size = JSON.parse(size); // Convert string to array
      if (!Array.isArray(size)) {
        return res.status(400).json({ message: "Size must be an array" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Invalid size format" });
    }

    // ✅ Validate required fields
    if (
      !productName ||
      !size ||
      !price ||
      !description ||
      !category ||
      !subCategory
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Limit number of images
    if (req.files && req.files.length > 4) {
      return res
        .status(400)
        .json({ message: "You can only upload a maximum of 4 images" });
    }

    // ✅ Store images from Cloudinary
    const images = []; // Initialize as an array

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(
          fileUri.content,
          {
            resource_type: "auto",
            folder: "/ecommerce/products",
          }
        );

        images.push({
          url: cloudResponse.secure_url,
          public_id: cloudResponse.public_id,
        });
      }
    }

    // ✅ Create and save the product
    const newProduct = new Product({
      productName,
      size,
      price,
      description,
      category,
      subCategory,
      bestSeller,
      images, // Use the processed images array
    });

    await Product.create(newProduct);

    res.status(201).json({
      message: "Product added successfully",
      newProduct,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products Controller
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({ products, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product Controller
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // ✅ Delete images from Cloudinary
    for (const image of product.images) {
      await cloudinary.uploader.destroy(image.public_id);
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product by ID Controller
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Data fetched", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
