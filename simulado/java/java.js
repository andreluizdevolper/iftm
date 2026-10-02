
alert("Olá, seja bem-vindo!")
document.getElementById("entrar").addEventListener("click", function () {

    const nome = document.getElementById("nome").value.trim();

    const palavras = nome.split(" ");

    if (nome === "" || palavras.length <= 1) {
        alert("Por favor, informe pelo menos NOME + SOBRENOME.");
    } else {
        const primeironome = palavras[0];
        const ultimonome = palavras[palavras.length - 1];

        localStorage.setItem("primeironome", primeironome);
        localStorage.setItem("ultimonome", ultimonome);
        window.location.href = "../menu.html";
        
    }
});


