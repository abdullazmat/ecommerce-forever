import { Order } from "../models/order.model.js";

export const addOrder = async (req, res) => {
  try {
    let { productinfo } = req.body;

    // Safely parse productinfo if it's a string
    try {
      if (typeof productinfo === "string") {
        productinfo = JSON.parse(productinfo);
      }
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Invalid product info format", success: false });
    }

    const {
      fName,
      lName,
      email,
      phone,
      street,
      city,
      state,
      zipcode,
      country,
      status,
      paymethod,
      total,
    } = req.body;

    // Validate required fields
    if (
      !fName ||
      !lName ||
      !email ||
      !phone ||
      !street ||
      !city ||
      !state ||
      !zipcode ||
      !country ||
      !status ||
      !paymethod ||
      !productinfo ||
      !Array.isArray(productinfo) || // Ensure productinfo is an array
      productinfo.length === 0 || // Ensure it has at least one product
      !total
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // Create new order
    const order = new Order({
      productinfo,
      fName,
      lName,
      email,
      phone,
      street,
      city,
      state,
      zipcode,
      country,
      status,
      paymethod,
      total,
    });

    await order.save();
    res.status(200).json({ message: "Order Placed", order, success: true });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};
