import { getAllCategorias} from "../Model/PrincipalModel.js";
import { getAllProductos} from "../Model/PrincipalModel.js";
import { getAllPedidos } from "../Model/PrincipalModel.js";
import { getAllUsuarios } from "../Model/PrincipalModel.js";

const getAllU = async (req, res) =>{
    const {user, password} = req.body
    if(!user || !password)
        return res.status(400).json({error:"falta el usuario o la contraseña"})
    const usuarios = await getAllUsuarios();
    if(usuarios[0].NombreUsuario === user && usuarios[0].Contrasena === password)
    return res.status(200).json(usuarios);

}

const getAllC = async (req, res) =>{

    const categorias = await getAllCategorias();
    return res.status(200).json(categorias);

}

const getAllP = async (req, res) =>{

    const productos = await getAllProductos();
    return res.status(200).json(productos);

}

const getAllPe = async (req, res) =>{

    const pedidos = await getAllPedidos();
    return res.status(200).json(pedidos);

}

export {getAllC}
export {getAllP}
export {getAllPe}
export {getAllU}