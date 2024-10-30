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