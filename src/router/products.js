import express from "express";
import { get, create, remove, update } from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermisson";
const router = express.Router();

router.get("/products/:id?", get);
router.post("/products", checkPermission, create);
router.delete("/products/:id", checkPermission, remove);
router.patch("/products/:id", checkPermission, update);

export default router;
