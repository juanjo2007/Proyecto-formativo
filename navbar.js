document.addEventListener("DOMContentLoaded", function () {
  const navbarElement = document.querySelector(".footer");

  if (navbarElement) {
    fetch("/footer.html")
      .then(response => response.text())
      .then(data => {
        navbarElement.innerHTML = data;

        // Ruta actual
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        // Enlaces del menú
        const navLinks = navbarElement.querySelectorAll(".navbar__menu a");

        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href.includes(currentPage)) {
            link.classList.add("active");
          }
        });
      })
      .catch(error => console.error("Error cargando el navbar:", error));
  }
});