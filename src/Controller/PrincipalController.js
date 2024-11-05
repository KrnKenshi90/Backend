import { 
    getAllCategorias, createCategoriaDB, updateCategoriaDB, deleteCategoriaDB,
    getAllProductos, createProductoDB, updateProductoDB, deleteProductoDB,
    getAllPedidos, createPedidoDB, updatePedidoDB, deletePedidoDB,
    getAllUsuarios 
} from "../Model/PrincipalModel.js";

export const getAllC = async (req, res) => {
    try {
        const categorias = await getAllCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        res.status(500).json({ message: "Error al obtener categorías" });
    }
};

export const createCategoria = async (req, res) => {
    try {
        await createCategoriaDB(req.body);
        res.status(201).json({ message: "Categoría creada exitosamente" });
    } catch (error) {
        console.error("Error al crear la categoría:", error);
        res.status(500).json({ message: "Error al crear la categoría" });
    }
};

export const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        await updateCategoriaDB(id, req.body);
        res.status(200).json({ message: "Categoría actualizada exitosamente" });
    } catch (error) {
        console.error("Error al actualizar la categoría:", error);
        res.status(500).json({ message: "Error al actualizar la categoría" });
    }
};

export const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCategoriaDB(id);
        res.status(200).json({ message: "Categoría eliminada exitosamente" });
    } catch (error) {
        console.error("Error al eliminar la categoría:", error);
        res.status(500).json({ message: "Error al eliminar la categoría" });
    }
};

export const getAllP = async (req, res) => {
    try {
        const productos = await getAllProductos();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

export const createProducto = async (req, res) => {
    try {
        await createProductoDB(req.body);
        res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        res.status(500).json({ message: "Error al crear el producto" });
    }
};

export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        await updateProductoDB(id, req.body);
        res.status(200).json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
};

export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteProductoDB(id);
        res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
};

export const getAllPe = async (req, res) => {
    try {
        const pedidos = await getAllPedidos();
        res.status(200).json(pedidos);
    } catch (error) {
        console.error("Error al obtener pedidos:", error);
        res.status(500).json({ message: "Error al obtener pedidos" });
    }
};

export const createPedido = async (req, res) => {
    try {
        await createPedidoDB(req.body);
        res.status(201).json({ message: "Pedido creado exitosamente" });
    } catch (error) {
        console.error("Error al crear el pedido:", error);
        res.status(500).json({ message: "Error al crear el pedido" });
    }
};

export const updatePedido = async (req, res) => {
    try {
        const { id } = req.params;
        await updatePedidoDB(id, req.body);
        res.status(200).json({ message: "Pedido actualizado exitosamente" });
    } catch (error) {
        console.error("Error al actualizar el pedido:", error);
        res.status(500).json({ message: "Error al actualizar el pedido" });
    }
};

export const deletePedido = async (req, res) => {
    try {
        const { id } = req.params;
        await deletePedidoDB(id);
        res.status(200).json({ message: "Pedido eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el pedido:", error);
        res.status(500).json({ message: "Error al eliminar el pedido" });
    }
};

export const getAllU = async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        return res.status(400).json({ error: "Falta el usuario o la contraseña" });
    }
    try {
        const usuarios = await getAllUsuarios();
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.NombreUsuario === user && usuario.Contrasena === password
        );
        if (usuarioEncontrado) {
            return res.status(200).json(usuarioEncontrado);
        } else {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
};
