import { definirCookie } from "../utils/cookies.js"

const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
   definirCookie("tokenJwt", tokenJwt);
  
    alert("Usuário autenticado com sucesso!");
    window.location.href = "/";
  });

socket.on("autenticacao_erro", () => {
    alert("Login ou senha incorretos!");
    window.location.href = "/login"
});

socket.on("usuario_nao_encontrado", () => {
    alert("Usuario inexistente!")
    window.location.href = "/login"
})
export { emitirAutenticarUsuario };