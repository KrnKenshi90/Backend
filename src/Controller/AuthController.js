import { registerUser } from "../Model/AuthModel.js";

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

