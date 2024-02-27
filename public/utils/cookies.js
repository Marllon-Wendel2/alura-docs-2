function definirCookie(chave, valor) {
    document.cookie =`${chave}=${valor};path=/`;
}

export { definirCookie };