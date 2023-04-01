import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    desc: String,
    status: Boolean,
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Product", productSchema);
