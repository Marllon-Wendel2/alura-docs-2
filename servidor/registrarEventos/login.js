import { encontraUsuario } from "../db/usuarioDb.js";
import autenticarUsuario from "../utils/autenticarUsurio.js";
import gerarJwt from "../utils/gerarJwt.js"
function registrarEventosLogin (socket, io) {
    socket.on("autenticar_usuario", async ({ nome, senha }) => {
        const usuario = await encontraUsuario(nome);      

        if(usuario){

            const autenticado = autenticarUsuario(senha, usuario);

            if(autenticado) {
                const tokenJwt = gerarJwt({ nomeUsuario: nome })
                
                

                socket.emit("autenticacao_sucesso", tokenJwt);
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_encontrado")
        }

    });
}

export default registrarEventosLogin