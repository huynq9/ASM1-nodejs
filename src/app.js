import express from "express";
import mongoose from "mongoose";
import productRouter from "./router/products";
import cors from "cors";
import authRouter from "./router/auth";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", productRouter);
app.use("/api", authRouter);
mongoose.connect("mongodb://127.0.0.1:27017/22032023");
export const viteNodeApp = app;
