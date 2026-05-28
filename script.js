console.log("Portfólio carregado com sucesso!");

const cards = document.querySelectorAll(".card, .projeto");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});