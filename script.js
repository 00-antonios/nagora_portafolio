// CAMBIA este número por tu WhatsApp con código de país, solo números.
// Ejemplo de formato chileno: 56912345678 (reemplázalo por tu número real).
const WHATSAPP_NUMBER = "56985133238";

const whatsappLink = document.getElementById("whatsapp-link");
const message = encodeURIComponent("Hola NagOra, quiero cotizar una página web para mi negocio.");
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});
