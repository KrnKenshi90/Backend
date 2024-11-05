import { registerUser } from "../Model/AuthModel.js";
import { loginUser } from "../Model/AuthModel.js";

export const registrarController = async (req, res) => {
    const user = req.body.user 
    const password = req.body.password 
    const roles = req.body.roles
    console.log(req.body, "datos")
    console.log(user,password,roles, "datos")
    if(!user || !password || !roles)
        return res.status(400).json({error:"falta el usuario o la contraseña o el rol"})
    const registro = await registerUser({user, password, roles});
    console.log (registro, "registro")
    if(!registro)
        return res.status(400).json({error:"error al registar base de datos"})
    return res.status(200).json(registro);

}

export const loginController = async (req, res) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({ error: "Faltan el usuario o la contraseña" });
    }

    try {
        const usuario = await loginUser(user, password);

        if (!usuario) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        return res.status(200).json({ 
            message: "Inicio de sesión exitoso", 
            user: { id: usuario.ID, nombre: usuario.NombreUsuario, rol: usuario.Rol }
        });
    } catch (error) {
        console.error("Error en el login:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};