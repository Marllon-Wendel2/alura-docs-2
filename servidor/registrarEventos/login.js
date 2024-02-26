import { encontraUsuario } from "../db/usuarioDb.js";
import autenticarUsuario from "../utils/autenticarUsurio.js";

function registrarEventosLogin (socket, io) {
    socket.on("autenticar_usuario", async ({ nome, senha }) => {
        const usuario = await encontraUsuario(nome);      

        if(usuario){

            const autenticado = autenticarUsuario(senha, usuario);

            if(autenticado) {
                socket.emit("autenticacao_sucesso");
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_encontrado")
        }

    });
}

export default registrarEventosLogin