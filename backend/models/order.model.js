import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    productinfo: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    country: {
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
    paymethod: {
      type: String,
      enum: ["cod", "stripe", "razorpay"],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
