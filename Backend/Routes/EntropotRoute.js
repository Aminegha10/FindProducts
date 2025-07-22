import express from "express";
const router = express.Router();
import {
  getEntropot,
  getOneEntropot,
} from "../Controllers/EntropotController.js";

router.get("/getAll", getEntropot);
router.get("/getOne/:id", getOneEntropot);

export default router;
