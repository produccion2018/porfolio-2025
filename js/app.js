// Selecciona el botón y el menú
const toggleButton = document.getElementById("menu-toggle");
const navbarNav = document.getElementById("navbarNav");

// Alternar clase activa para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
});



// Datos de los proyectos
const projects = [
  { id: 1, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto1" },
  { id: 2, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto2" },
  { id: 3, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto3" },
  { id: 4, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto4" },
  { id: 5, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto5" },
  { id: 6, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto6" },
  { id: 7, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto7" },
  { id: 8, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto8" },
  { id: 9, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto9" },
  { id: 10, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto10" },
  { id: 11, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto11" },
  { id: 12, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto12" },
  { id: 13, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto13" },
  { id: 14, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto14" },
  { id: 15, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto15" },
  { id: 16, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto16" },
  { id: 17, img: "https://via.placeholder.com/150", link: "https://github.com/tuusuario/proyecto17" },
];

// Selecciona el contenedor
const projectsContainer = document.getElementById("projects-container");

// Genera las tarjetas dinámicamente
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.img}" alt="Proyecto ${project.id}">
    <a href="${project.link}" target="_blank">Ver Proyecto</a>
  `;
  projectsContainer.appendChild(card);
});

