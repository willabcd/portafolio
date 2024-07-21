// Agrega animaciones o comportamiento interactivo aquí

document.addEventListener("DOMContentLoaded", function () {
  // Ejemplo de animación de entrada para la sección de héroe
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroButton = document.querySelector(".btn-primary");

  heroTitle.classList.add("fade-in");
  heroSubtitle.classList.add("fade-in");
  heroButton.classList.add("fade-in");
});
