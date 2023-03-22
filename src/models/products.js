import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  status: Boolean,
});
export default mongoose.model("Product", productSchema);
