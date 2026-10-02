

const primeironome = localStorage.getItem("primeironome");
const ultimonome = localStorage.getItem("ultimonome");


mensagem = document.getElementById("boasVindas");

bntEntrar = document.getElementById("btnEntrar");

mensagem.innerHTML = (`${primeironome} ${ultimonome}, seja bem-vindo ao jogo dos felinos!`)


document.getElementById("btnEntrar").addEventListener("click", function() {
    window.location.href = "../felino.html";
});