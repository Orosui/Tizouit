// Sélectionne le menu de navigation
const menu = document.querySelector("nav");

// Ajoute un événement au clic sur le menu
menu.addEventListener("click", function() {
    alert("Vous avez cliqué sur le menu !");
});

// Exemple : Faire défiler la page vers le haut en cliquant sur le footer
const footer = document.querySelector("footer");

footer.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});