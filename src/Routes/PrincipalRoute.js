import { getAllC, createCategoria, updateCategoria, deleteCategoria } from "../Controller/PrincipalController.js";
import { getAllP, createProducto, updateProducto, deleteProducto } from "../Controller/PrincipalController.js";
import { getAllPe, createPedido, updatePedido, deletePedido } from "../Controller/PrincipalController.js";
import { getAllU } from "../Controller/PrincipalController.js";
import express from "express";

const router = express.Router();

router.get('/listarc', getAllC);
router.post('/categoria', createCategoria);
router.put('/categoria/:id', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

router.get('/listarp', getAllP);
router.post('/producto', createProducto);
router.put('/producto/:id', updateProducto);
router.delete('/producto/:id', deleteProducto);

router.get('/listarpe', getAllPe);                 
router.post('/pedido', createPedido);
router.put('/pedido/:id', updatePedido);
router.delete('/pedido/:id', deletePedido);

router.get('/listaru', getAllU);

export default router;
