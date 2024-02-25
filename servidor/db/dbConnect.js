import { MongoClient } from "mongodb";


const cliente = new MongoClient("mongodb+srv://123:123@aluradons.ighhmlm.mongodb.net/?retryWrites=true&w=majority");

let documentosColecao;
let usuariosColecao
try {
    await cliente.connect();

    const db = cliente.db(`alura_websockets`);
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

    console.log("conectado ao banco de dados")

} catch (erro) {
 console.log(erro);
}

export { documentosColecao, usuariosColecao };