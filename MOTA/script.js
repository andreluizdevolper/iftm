
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
let temporizador;

const foto = document.getElementById("fotoProduto");
const nome = document.getElementById("nomeProduto");
const descricao = document.getElementById("descricaoProduto");
const numero = document.querySelector(".carrossel-topo span");
const indicadores = document.querySelectorAll(".indicadores span");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const carrossel = document.getElementById("produtos");

// Mostra o produto selecionado
function mostrarProduto() {
    foto.style.opacity = "0";

    setTimeout(function() {
        foto.src = produtos[atual].foto;
        foto.alt = produtos[atual].nome;
        nome.textContent = produtos[atual].nome;
        descricao.textContent = produtos[atual].descricao;

        numero.textContent =
            "0" + (atual + 1) + " / 0" + produtos.length;

        indicadores.forEach(function(indicador, indice) {
            indicador.classList.toggle("ativo", indice === atual);
        });

        foto.style.opacity = "1";
    }, 200);
}

// Avança para a próxima foto
function proximoProduto() {
    atual = (atual + 1) % produtos.length;
    mostrarProduto();
    reiniciarTemporizador();
}

// Volta para a foto anterior
function produtoAnterior() {
    atual = (atual - 1 + produtos.length) % produtos.length;
    mostrarProduto();
    reiniciarTemporizador();
}

// Reinicia a contagem da troca automática
function reiniciarTemporizador() {
    clearInterval(temporizador);

    temporizador = setInterval(function() {
        atual = (atual + 1) % produtos.length;
        mostrarProduto();
    }, 3000);
}   

// Eventos das setinhas
proximo.addEventListener("click", proximoProduto);
anterior.addEventListener("click", produtoAnterior);

// Permite clicar nos indicadores
indicadores.forEach(function(indicador, indice) {
    indicador.style.cursor = "pointer";

    indicador.addEventListener("click", function() {
        atual = indice;
        mostrarProduto();
        reiniciarTemporizador();
    });
});

// Pausa a troca automática enquanto o mouse está no carrossel
carrossel.addEventListener("mouseenter", function() {
    clearInterval(temporizador);
});

carrossel.addEventListener("mouseleave", function() {
    reiniciarTemporizador();
});

// Também funciona com toque em celulares
carrossel.addEventListener("touchstart", function() {
    clearInterval(temporizador);
}, { passive: true });

carrossel.addEventListener("touchend", function() {
    reiniciarTemporizador();
}, { passive: true });

// Efeito visual nos botões
[anterior, proximo].forEach(function(botao) {
    botao.addEventListener("click", function() {
        botao.style.transform = "scale(0.9)";

        setTimeout(function() {
            botao.style.transform = "scale(1)";
        }, 150);
    });
});

// Inicia o carrossel
mostrarProduto();
reiniciarTemporizador();
