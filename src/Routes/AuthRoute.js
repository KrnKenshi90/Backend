import express from "express";
import { registrarController } from "../Controller/AuthController.js";
import { loginController } from "../Controller/AuthController.js";

const router = express.Router();

router.post('/registro', registrarController)
router.post('/login', loginController); 

export default router;
