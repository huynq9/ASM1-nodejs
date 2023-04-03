import mongoose from "mongoose";
const categoriesSchema = new mongoose.Schema(
  {
    name: String,
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  },
  { timestamp: true, versionKey: false }
);
export default mongoose.model("Categories", categoriesSchema);
