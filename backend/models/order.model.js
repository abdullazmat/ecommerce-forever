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
        size: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
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
        "Out for Delivery",
        "Delivered",
      ],
    },
    payment: {
      type: String,
      enum: ["Pending", "Completed"],
    },
    paymethod: {
      type: String,
      enum: ["cod", "stripe", "razorpay"],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
