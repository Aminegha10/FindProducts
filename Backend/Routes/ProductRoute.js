import express from "express";
const router = express.Router();
import { getProducts ,getOneProduct} from "../Controllers/ProductsController.js";

router.get("/getAll", getProducts);
router.get("/getOneProduct/:ref", getOneProduct);

export default router;
