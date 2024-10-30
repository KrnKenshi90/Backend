import express from "express";
import { registrarController } from "../Controller/AuthController.js";

const router = express.Router();

router.post('/registro', registrarController)


export default router;
