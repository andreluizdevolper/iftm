 texto = prompt("Digite um texto:");

invertido = "";

for (i = texto.length - 1; i >= 0; i--) {
    invertido = invertido + texto[i];
}

if (texto == invertido) {
    alert("O texto é um palíndromo!");
} else {
    alert("O texto não é um palíndromo!");
}