import { sql } from "../Config/Connection.js";

export const registerUser = async ({user, password, roles}) => {
  try {
    const query = await sql.query(`INSERT INTO Usuarios (NombreUsuario, Contrasena, Rol) VALUES ('${user}', '${password}', '${roles}');`)
    console.log(query, "Usuarios")
    return query;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (user, password) => {
  try {
    const result = await sql.query(`SELECT UsuarioID, NombreUsuario, Rol FROM Usuarios WHERE NombreUsuario = '${user}' AND Contrasena = '${password}';`);
    return result.recordset[0] || null;
  } catch (error) {
    throw error;
  }
};