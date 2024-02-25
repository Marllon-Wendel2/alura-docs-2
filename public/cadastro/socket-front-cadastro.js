const socket = io();

function emitirCadastroUsuario(dados) {
    socket.emit("cadastrar_usuario", dados);

}

socket.on("cadastro_sucesso", () => {
    alert ("Cadastro realizado com sucesso");
});

socket.on("cadastro_erro", () => {
    alert ("Cadastro realizado com erro");
})

socket.on("usuario_ja_existente", () => {
    alert ("Usuário já existe!!")
})
socket.on("atualiza_form", () => {
    const form = document.getElementById("form-cadastro");
    form["input-usuario"].value = ""
    form["input-senha"].value = ""

})



export { emitirCadastroUsuario };