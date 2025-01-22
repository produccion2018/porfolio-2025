// JavaScript para cambiar el texto del testimonio cada 6 segundos
let testimonials = [
    '"Mauro es un excelente desarrollador, su trabajo en nuestro proyecto fue fundamental."',
    '"Gracias a su creatividad, el diseño de nuestra web superó todas nuestras expectativas."',
    '"Gran profesional, siempre entregando soluciones rápidas y eficaces."',
    '"Mauro logra transformar ideas complejas en productos fáciles de usar. Muy recomendable."',
    '"Trabajo excepcional, siempre con una actitud positiva y con mucho enfoque en el detalle."',
    '"Ha sido un placer trabajar con Mauro, una persona comprometida con el éxito del proyecto."',
  ];
  
  let testimonialText = document.querySelectorAll('.testimonial-text');
  
  let index = 0;
  
  function changeTestimonial() {
    testimonialText.forEach((text, i) => {
      text.textContent = testimonials[(index + i) % testimonials.length];
    });
    index = (index + 1) % testimonials.length;
  }
  
  // Cambia el testimonio cada 6 segundos
  setInterval(changeTestimonial, 6000);
  
  // Inicializa con el primer testimonio
  changeTestimonial();
  