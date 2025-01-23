import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    size: {
      type: String,
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
      enum: ["Topware", "Bottomware", "Footware", "Winterwear"],
    },

    price: {
      type: Number,
      required: true,
    },

    image: [
      {
        url: { type: String },
        public_id: { type: String },
      },
    ],
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
