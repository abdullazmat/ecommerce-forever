import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
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
