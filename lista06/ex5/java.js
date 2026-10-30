let quantidade = Number(prompt("Quantos nomes deseja digitar?"));
let nomes = [];

for (let i = 0; i < quantidade; i++) {
nomes[i] = prompt("Digite um nome:");
}

let i = 0;

let tempo = setInterval(function() {
    if (i < quantidade) {
        document.getElementById("exibir").innerHTML += nomes[i] + "<br>";
        i++;
    } else {
        clearInterval(tempo);
    }
}, 1000);