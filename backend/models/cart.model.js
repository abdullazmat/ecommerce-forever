import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    size: {
      type: [String],
      enum: ["S", "M", "L", "XL", "XXL"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    images: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
