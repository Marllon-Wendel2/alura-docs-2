import { emitirExcliurDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");


const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir =  document.getElementById("excluir-documento")

tituloDocumento.textContent = nomeDocumento || "Documento Desconhecido"

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({
    texto: textoEditor.value,
     nomeDocumento,
    });
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
};

function alertarERedirecionar(nome) {
  if(nome === nomeDocumento){
    alert(`O documento ${nome} foi deletado!`)
    window.location.href = "/"
}};

botaoExcluir.addEventListener("click", () => {
  emitirExcliurDocumento(nomeDocumento)
})

export { atualizaTextoEditor, alertarERedirecionar };