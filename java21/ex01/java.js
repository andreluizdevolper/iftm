
nome = prompt("Digite seu primeiro nome:");
sobrenome = prompt("Digite seu sobrenome:");
quantidade = prompt("Quantas vezes deseja mostrar o nome?");
cor = prompt("Digite uma cor:");

nomeCompleto = nome + " " + sobrenome;

for (i = 1; i <= quantidade; i++) {

    if (i % 2 == 1) {
        document.write("<p style='color:black'>" + nomeCompleto + "</p>");
    } else {
        document.write("<p style='color:" + cor + "'>" + nomeCompleto + "</p>");
    }

}
