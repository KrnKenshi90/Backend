
import { sql } from "../Config/Connection.js";

const getAllUsuarios = async () => {
  try {
    const Usuarios = await sql.query('SELECT * FROM Usuarios;');
    console.log(Usuarios, "Usuarios")
    return Usuarios.recordset;
  } catch (error) {
    throw error;
  }
};

const getAllCategorias = async () => {
  try {
    const Categorias = await sql.query('SELECT * FROM Categorias;');
    console.log(Categorias, "categorias")
    return Categorias.recordset;
  } catch (error) {
    throw error;
  }
};

const getAllProductos = async () => {
  try {
    const Productos = await sql.query('SELECT * FROM Productos;');
    console.log(Productos, "Productos")
    return Productos.recordset;
  } catch (error) {
    throw error;
  }
};

const getAllPedidos = async () => {
  try {
    const Pedidos = await sql.query('SELECT * FROM Pedidos;');
    console.log(Pedidos, "Pedidos")
    return Pedidos.recordset;
  } catch (error) {
    throw error;
  }
};

export { getAllCategorias };

export { getAllProductos };

export { getAllPedidos };

export { getAllUsuarios };