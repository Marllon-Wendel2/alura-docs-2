import { randomBytes, scrypt, scryptSync } from "crypto"

function criaHasheSalSenha(senhaDigitada) {
    const salSenha = randomBytes(16).toString("hex");

    const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString("hex");

    return { salSenha, hashSenha};
}

export default criaHasheSalSenha