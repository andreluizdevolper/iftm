
window.onload = function() {
    var primeiroNome = localStorage.getItem("primeironome");

    var gato1 = document.getElementById("gato01");
    if (gato1) {
        gato1.addEventListener("click", function() {
            alert("Oi " + primeiroNome + ", tudo bem com você?");
        });
    }

    var contador = 0;
    var gato2 = document.getElementById("gato02");
    var textoContador = document.getElementById("contador");
    if (gato2) {
        gato2.addEventListener("click", function() {
            contador = contador + 1;
            textoContador.innerText = contador;
        });
    }

    var gato3 = document.getElementById("gato03");
    if (gato3) {
        gato3.addEventListener("mouseover", function() {
            gato3.src = "CSS/img/gato06.gif";
        });

        gato3.addEventListener("mouseout", function() {
            gato3.src = "CSS/img/gato03.gif";
        });
    }

    var gato4 = document.getElementById("gato04");
    var texto4 = document.getElementById("textoGato4");
    if (gato4) {
        gato4.addEventListener("mouseover", function() {
            texto4.innerText = "Ai, pare de fazer cócegas!";
        });

        gato4.addEventListener("mouseout", function() {
            texto4.innerText = "lá lá lá lá lá";
        });
    }

    var botaoSorte = document.getElementById("btnSorte");
    var campoNumero = document.getElementById("numSorte");
    if (botaoSorte) {
        botaoSorte.addEventListener("click", function() {
            var numero = Math.floor(Math.random() * 100) + 1;
            campoNumero.value = numero;
        });
    }
};