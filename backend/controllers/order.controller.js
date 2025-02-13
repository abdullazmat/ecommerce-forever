import { Order } from "../models/order.model.js";

export const addOrder = async (req, res) => {
  try {
    const user = req?.userId;
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
      payment,
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
      !payment ||
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
      user,
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
      payment,
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

export const getAllOrders = async (req, res) => {
  try {
    const user = req.userId;
    const allOrders = await Order.find({ user: user }).sort({
      createdAt: -1,
    }); // Sort by latest

    res.status(200).json({ allOrders, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Order Status Controller
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ message: "Order status updated", success: true });
  } catch (error) {
    console.error("Error in updateOrderStatus:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
