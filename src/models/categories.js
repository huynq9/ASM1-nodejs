import mongoose from "mongoose";
const categoriesSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamp: true, versionKey: false }
);
export default mongoose.model("Categories", categoriesSchema);
