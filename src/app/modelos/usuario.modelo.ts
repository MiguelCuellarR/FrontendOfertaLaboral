import { UsuarioModule } from "../modulos/usuario/usuario.module";

export class UsuarioModelo{
    _id?: String;
    nombre_usuario?: String;
    telefono?: String;
    clave?: String;
    tipoUsuarioId?: String;
    user?: UsuarioModule;
    tk?: String;
    isLoggedIn: Boolean = false;
}