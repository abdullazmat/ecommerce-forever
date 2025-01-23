import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Order Placed",
        "Packing",
        "Shipped",
        "Out For Delivery",
        "Delivered",
      ],
    },
    method: {
      type: String,
      enum: ["COD", "Credit Card"],
    },
  },
  { timestamps: true }
);
