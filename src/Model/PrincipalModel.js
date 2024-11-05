import { sql } from "../Config/Connection.js";

export const getAllCategorias = async () => {
    try {
        const result = await sql.query`SELECT * FROM Categorias;`;
        return result.recordset;
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        throw error;
    }
};

export const createCategoriaDB = async (data) => {
    const { Nombre, Descripcion } = data;
    try {
        await sql.query`INSERT INTO Categorias (Nombre, Descripcion) VALUES (${Nombre}, ${Descripcion})`;
        console.log("Categoría creada exitosamente");
    } catch (error) {
        console.error("Error al insertar categoría:", error);
        throw error;
    }
};

export const updateCategoriaDB = async (id, data) => {
    const { Nombre, Descripcion } = data;
    try {
        await sql.query`UPDATE Categorias SET Nombre = ${Nombre}, Descripcion = ${Descripcion} WHERE CategoriaID = ${id}`;
        console.log(`Categoría con ID ${id} actualizada exitosamente`);
    } catch (error) {
        console.error("Error al actualizar categoría:", error);
        throw error;
    }
};

export const deleteCategoriaDB = async (id) => {
    try {
        await sql.query`DELETE FROM Categorias WHERE CategoriaID = ${id}`;
        console.log(`Categoría con ID ${id} eliminada exitosamente`);
    } catch (error) {
        console.error("Error al eliminar categoría:", error);
        throw error;
    }
};

export const getAllProductos = async () => {
    try {
        const result = await sql.query`SELECT * FROM Productos;`;
        return result.recordset;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        throw error;
    }
};

export const createProductoDB = async (data) => {
    const { Nombre, Precio, Descripcion, CategoriaID } = data;
    try {
        await sql.query`INSERT INTO Productos (Nombre, Precio, Descripcion, CategoriaID) VALUES (${Nombre}, ${Precio}, ${Descripcion}, ${CategoriaID})`;
        console.log("Producto creado exitosamente");
    } catch (error) {
        console.error("Error al insertar producto:", error);
        throw error;
    }
};

export const updateProductoDB = async (id, data) => {
    const { Nombre, Precio, Descripcion, CategoriaID } = data;
    try {
        await sql.query`UPDATE Productos SET Nombre = ${Nombre}, Precio = ${Precio}, Descripcion = ${Descripcion}, CategoriaID = ${CategoriaID} WHERE ProductoID = ${id}`;
        console.log(`Producto con ID ${id} actualizado exitosamente`);
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        throw error;
    }
};

export const deleteProductoDB = async (id) => {
    try {
        await sql.query`DELETE FROM Productos WHERE ProductoID = ${id}`;
        console.log(`Producto con ID ${id} eliminado exitosamente`);
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        throw error;
    }
};

export const getAllPedidos = async () => {
    try {
        const result = await sql.query`SELECT * FROM Pedidos;`;
        return result.recordset;
    } catch (error) {
        console.error("Error al obtener pedidos:", error);
        throw error;
    }
};

export const getAllUsuarios = async () => {
    try {
        const result = await sql.query`SELECT * FROM Usuarios;`;
        return result.recordset;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        throw error;
    }
};

export const createPedidoDB = async (data) => {
  const { ClienteID, FechaPedido, Total } = data;
  try {
      await sql.query`INSERT INTO Pedidos (ClienteID, FechaPedido, Total) VALUES (${ClienteID}, ${FechaPedido}, ${Total})`;
      console.log("Pedido creado exitosamente");
  } catch (error) {
      console.error("Error al crear pedido:", error);
      throw error;
  }
};

export const updatePedidoDB = async (id, data) => {
  const { ClienteID, FechaPedido, Total } = data;
  try {
      await sql.query`UPDATE Pedidos SET ClienteID = ${ClienteID}, FechaPedido = ${FechaPedido}, Total = ${Total} WHERE PedidoID = ${id}`;
      console.log(`Pedido con ID ${id} actualizado exitosamente`);
  } catch (error) {
      console.error("Error al actualizar pedido:", error);
      throw error;
  }
};

export const deletePedidoDB = async (id) => {
  try {
      await sql.query`DELETE FROM Pedidos WHERE PedidoID = ${id}`;
      console.log(`Pedido con ID ${id} eliminado exitosamente`);
  } catch (error) {
      console.error("Error al eliminar pedido:", error);
      throw error;
  }
};
