// Agrega animaciones o comportamiento interactivo aquí

document.addEventListener("DOMContentLoaded", function () {
  // Ejemplo de animación de entrada para la sección de héroe
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroButton = document.querySelector(".btn-primary");

  heroTitle.style.opacity = 0;
  heroSubtitle.style.opacity = 0;
  heroButton.style.opacity = 0;

  setTimeout(() => {
    heroTitle.style.transition = "opacity 1s";
    heroSubtitle.style.transition = "opacity 1s";
    heroButton.style.transition = "opacity 1s";

    heroTitle.style.opacity = 1;
    heroSubtitle.style.opacity = 1;
    heroButton.style.opacity = 1;
  }, 500);
});
