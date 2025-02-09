function toggleMenu() {
  const menu = document.querySelector(".navbar ul");
  const toggle = document.querySelector(".menu-toggle");
  const body = document.body;  

  menu.classList.toggle("show");
  toggle.classList.toggle("active");

  // Cambiar el modo oscuro
  body.classList.toggle("dark-mode");
}

// Cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".navbar ul").classList.remove("show");
    document.querySelector(".menu-toggle").classList.remove("active");
  });
});

  


// Datos de los proyectos con imágenes específicas
const projects = [
  { id: 1, img: "proyecto1", link: "https://github.com/tuusuario/proyecto1" },
  { id: 2, img: "img/proyecto2.jpg", link: "https://github.com/tuusuario/proyecto2" },
  { id: 3, img: "img/proyecto3.jpg", link: "https://github.com/tuusuario/proyecto3" },
  { id: 4, img: "img/proyecto4.jpg", link: "https://github.com/tuusuario/proyecto4" },
  { id: 5, img: "img/proyecto5.jpg", link: "https://github.com/tuusuario/proyecto5" }
];

// Seleccionar el contenedor donde se mostrarán los proyectos
const projectsContainer = document.getElementById("projects-container");

// Generar dinámicamente las tarjetas de proyectos
projects.forEach(project => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.target = "_blank";

  const projectImg = document.createElement("img");
  projectImg.src = project.img;
  projectImg.alt = `Proyecto ${project.id}`;

  projectLink.appendChild(projectImg);
  projectCard.appendChild(projectLink);
  projectsContainer.appendChild(projectCard);
});

