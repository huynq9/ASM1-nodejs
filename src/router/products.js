import express from "express";
import { get, create, remove, update } from "../controllers/products";
const router = express.Router();

router.get("/products/:id?", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.patch("/products/:id", update);

export default router;
