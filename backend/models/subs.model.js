import mongoose from "mongoose";
const subsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Subs = mongoose.model("Subs", subsSchema);
