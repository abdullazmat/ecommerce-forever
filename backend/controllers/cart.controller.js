import { Cart } from "../models/cart.model.js";
import mongoose from "mongoose";

export const addItem = async (req, res) => {
  try {
    const user = req?.userId;
    console.log("User while adding cart", user);
    let { productName, size, price, images, quantity, productId } = req.body;

    // 🛑 Convert `size` from string to array (if necessary)
    if (typeof size === "string") {
      try {
        size = JSON.parse(size);
      } catch (error) {
        return res.status(400).json({
          message: "Invalid format for size. Must be an array.",
          success: false,
        });
      }
    }

    if (!productName || !size || !price || !images || !quantity || !productId) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // 🛑 Convert price & quantity to numbers
    price = Number(price);
    quantity = Number(quantity);

    const cart = await Cart.create({
      user,
      productName,
      size,
      price,
      images,
      quantity,
      productId,
    });

    return res.status(201).json({
      message: "Item added to cart",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// Get all Cart Items Controller
export const getCartItems = async (req, res) => {
  try {
    const user = req.userId;
    const allcartItems = await Cart.find({ user })
      .populate("productId")
      .populate("user")
      .sort({ createdAt: -1 });

    res.status(200).json({ allcartItems, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Cart Item Controller
export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Cart.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await Cart.findByIdAndDelete(id);

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Cart Item Controller
export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
      return res.status(400).json({ message: "Quantity is required" });
    }

    const item = await Cart.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.quantity = quantity;

    await item.save();

    res.status(200).json({ message: "Item deleted successfully", item });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete All Cart Items Controller
export const deleteAllCartItem = async (req, res) => {
  try {
    const user = req?.userId;
    await Cart.deleteMany({ user: user });
    const cart = await Cart.find();

    res.status(200).json({ message: "All items deleted successfully", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
