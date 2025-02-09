import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
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

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Kids"],
    },
    subCategory: {
      type: String,
      required: true,
      enum: ["Topware", "Bottomware", "Winterware"],
    },

    price: {
      type: Number,
      required: true,
    },

    images: [
      {
        url: { type: String, required: true },
        public_id: { type: String, required: true },
      },
    ],
    bestSeller: {
      type: Boolean,
      default: false,
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
    orders: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
