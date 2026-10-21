
const produtos = [
    {
        foto: "img/correia1.jpg",
        nome: "Correia para tablado",
        descricao: "Resistência para o seu projeto"
    },
    {
        foto: "img/correia2.jpg",
        nome: "Qualidade e durabilidade",
        descricao: "Conheça nossas opções de correias"
    },
    {
        foto: "img/correia3.jpg",
        nome: "Correias para seu projeto",
        descricao: "Consulte modelos e disponibilidade"
    }
];

let atual = 0;

const foto = document.getElementById("fotoProduto");
const nome = document.getElementById("nomeProduto");
const descricao = document.getElementById("descricaoProduto");
const numero = document.querySelector(".carrossel-topo span");
const indicadores = document.querySelectorAll(".indicadores span");

function mostrarProduto() {
    foto.style.opacity = 0;

    setTimeout(function() {
        foto.src = produtos[atual].foto;
        foto.alt = produtos[atual].nome;
        nome.textContent = produtos[atual].nome;
        descricao.textContent = produtos[atual].descricao;
        numero.textContent = "0" + (atual + 1) + " / 03";

        indicadores.forEach(function(indicador, indice) {
            indicador.classList.toggle("ativo", indice === atual);
        });

        foto.style.opacity = 1;
    }, 200);
}

document.getElementById("proximo").addEventListener("click", function() {
    atual = (atual + 1) % produtos.length;
    mostrarProduto();
});

document.getElementById("anterior").addEventListener("click", function() {
    atual = (atual - 1 + produtos.length) % produtos.length;
    mostrarProduto();
});

setInterval(function() {
    atual = (atual + 1) % produtos.length;
    mostrarProduto();
}, 4000);
