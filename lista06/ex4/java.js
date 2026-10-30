let tempo = Number(prompt("Digite quantos segundos deseja aguardar:"));
let contador = setInterval(function() {
document.getElementById("mensagem").innerHTML =
"Por favor, aguarde " + tempo + " segundos para carregar a página do Google.";
    if (tempo == 0) {
        clearInterval(contador);
        window.location.href = "https://www.google.com";
    } else {
        tempo--;
    }
}, 1000);