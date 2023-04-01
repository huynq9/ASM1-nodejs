import express from "express";
import { checkPermission } from "../middlewares/checkPermisson";
import { get, create, remove, update } from "../controllers/categories";
const router = express.Router();

router.get("/categories/:id?", get);
router.post("/categories", checkPermission, create);
router.delete("/categories/:id", checkPermission, remove);
router.patch("/categories/:id", checkPermission, update);

export default router;
