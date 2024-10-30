import { getAllC } from "../Controller/PrincipalController.js";
import { getAllP } from "../Controller/PrincipalController.js";
import { getAllPe } from "../Controller/PrincipalController.js";
import { getAllU } from "../Controller/PrincipalController.js";
import express from "express";

const router = express.Router();

router.get('/listarc', getAllC);
router.get('/listarp', getAllP);
router.get('/listarpe', getAllPe);
router.get('/listaru', getAllU)

export default router;
