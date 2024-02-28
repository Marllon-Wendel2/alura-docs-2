import "dotenv/config";

import { autorizarUsuario } from "./middlewares/autorizarUsuario.js";

import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosLogin from "./registrarEventos/login.js";

import io from "./servidor.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosDocumento(socket, nspUsuarios);
  registrarEventosInicio(socket, nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
