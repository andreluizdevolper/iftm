texto = prompt("Digite um texto:");
letra = prompt("Digite uma letra:");

palavras = texto.split(" ");

for (let i = 0; i < palavras.length; i++) {

    if (palavras[i][0] == letra) {
        document.write(palavras[i] + " ");
    }

}