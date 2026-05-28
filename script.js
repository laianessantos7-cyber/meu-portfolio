console.log("Portfólio carregado!");

const elementos = document.querySelectorAll(
  ".secao, .card, .projeto"
);

function revelarElementos() {
  const alturaTela = window.innerHeight;

  elementos.forEach((elemento) => {
    const distanciaTopo = elemento.getBoundingClientRect().top;

    if (distanciaTopo < alturaTela - 100) {
      elemento.style.opacity = "1";
      elemento.style.transform = "translateY(0)";
    }
  });
}

elementos.forEach((elemento) => {
  elemento.style.opacity = "0";
  elemento.style.transform = "translateY(50px)";
  elemento.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revelarElementos);

revelarElementos();