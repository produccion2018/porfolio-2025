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

  


document.getElementById("contacto-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Todos los campos son obligatorios",
      });
      return;
  }

  if (!validarEmail(email)) {
      Swal.fire({
          icon: "error",
          title: "Correo inválido",
          text: "Por favor ingresa un email válido",
      });
      return;
  }

  Swal.fire({
      icon: "success",
      title: "¡Mensaje enviado!",
      text: "Me pondré en contacto contigo pronto.",
  });

  // Limpiar el formulario
  document.getElementById("contacto-form").reset();
});

// Función para validar email
function validarEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
