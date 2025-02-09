import { Cart } from "../models/cart.model.js";

export const addItem = async (req, res) => {
  try {
    let { productName, size, price, images, quantity } = req.body;
    console.log(req.body);

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

    if (!productName || !size || !price || !images || !quantity) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // 🛑 Convert price & quantity to numbers
    price = Number(price);
    quantity = Number(quantity);

    const cart = await Cart.create({
      productName,
      size,
      price,
      images,
      quantity,
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

// Get all products Controller
export const getCartItems = async (req, res) => {
  try {
    const allcartItems = await Cart.find();

    res.status(200).json({ allcartItems, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
