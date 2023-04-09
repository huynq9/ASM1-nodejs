import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    original_price: Number,
    image: String,
    properties: String,
    desc: String,
    status: Boolean,
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
    },
    isPublic: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
