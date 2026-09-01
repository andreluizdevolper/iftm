// HEADER TRANSPARENTE AO SCROLL
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ANIMAÇÃO DE SCROLL
const elementos = document.querySelectorAll(".animar");

function animarScroll() {
  const alturaTela = window.innerHeight;

  elementos.forEach((el, index) => {
    const posicao = el.getBoundingClientRect().top;

    if (posicao < alturaTela - 100) {
      // ENTRADA com delay (efeito cascata)
      el.style.transitionDelay = `${index * 0.1}s`;
      el.classList.add("ativo");
    } else {
      // SAÍDA ao subir
      el.classList.remove("ativo");
      el.style.transitionDelay = "0s";
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);


// MENU HAMBURGUER
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");

toggle.addEventListener("click", () => {
  menu.classList.add("ativo");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("ativo");
});


document.body.style.overflow = "hidden";
document.body.style.overflow = "auto";


// FECHAR MENU AO CLICAR FORA
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".menu-toggle");

  const clicouDentroMenu = menu.contains(event.target);
  const clicouNoBotao = toggle.contains(event.target);

  if (!clicouDentroMenu && !clicouNoBotao) {
    menu.classList.remove("ativo");
  }
});
