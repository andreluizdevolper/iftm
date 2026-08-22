texto = prompt("Digite um texto:");

palavras = texto.split(" ");

letras = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < letras.length; i++) {

 achou = false;

    for (j = 0; j < palavras.length; j++) {

        if (palavras[j][0] == letras[i]) {

            if (achou == false) {
                document.write("<p>Palavras iniciadas com a letra " + letras[i] + ":</p>");
                achou = true;
            }

            document.write("<li>" + palavras[j] + "</li>");
        }
    }
}