import criaHasheSalSenha from "../utils/criaHasheSalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontraUsuario(nome) {
    return usuariosColecao.findOne({nome})
}

function cadastrarUsuario({ nome, senha }) {
    const { hashSenha, salSenha} = criaHasheSalSenha(senha)

    return usuariosColecao.insertOne({nome, hashSenha, salSenha})
}

export { cadastrarUsuario, encontraUsuario }