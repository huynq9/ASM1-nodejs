import express from "express";
import mongoose from "mongoose";
import productRouter from "./router/products";

const app = express();
app.use(express.json());
app.use("/api", productRouter);
mongoose.connect("mongodb://127.0.0.1:27017/22032023");
export const viteNodeApp = app;
