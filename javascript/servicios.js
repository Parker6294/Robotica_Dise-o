document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      loadingScreen.classList.add('fade-out'); // Agregar clase de desvanecimiento

      setTimeout(() => {
          loadingScreen.style.display = 'none'; // Ocultar después del desvanecimiento
          
          const mainContent = document.getElementById('main-content');
          mainContent.style.display = 'block'; // Mostrar el contenido
          mainContent.style.opacity = '1'; // Aseguramos que sea visible
      }, 500); // Tiempo del efecto de desvanecimiento
  }, 2000); // Tiempo total de carga (2 segundos)
});




function showService(service) {
  const description = document.getElementById("service-description");

  // Ocultar todos los carruseles
  document.getElementById("consultoria-carousel").style.display = "none";
  document.getElementById("mantenimiento-carousel").style.display = "none";
  document.getElementById("monitoreo-carousel").style.display = "none";

  // Limpiar descripción y ocultar imágenes
  description.innerHTML = "";
  
  let imageSources = []; // Contendrá las fuentes de imágenes para cada servicio
  let carouselId = "";

  switch (service) {
    case "consultoria":
      description.innerHTML = `
        <div class="text-container">
          <h3>Consultoría</h3>
          <p>Ofrecemos un enfoque integral para maximizar el rendimiento y la eficiencia.</p>
          <ul>
            <li><i class="fa-solid fa-check"></i> Una visión general</li>
            <li><i class="fa-solid fa-check"></i> Análisis integral del equipo de empaque</li>
            <li><i class="fa-solid fa-check"></i> Material</li>
            <li><i class="fa-solid fa-check"></i> Aplicación</li>
            <li><i class="fa-solid fa-check"></i> Capacitación de personal operativo</li>
          </ul>
        </div>`;
      imageSources = [
        "Imagenes/servicios/vic1.jpg",
        "Imagenes/servicios/vic2.jpg",
        "Imagenes/servicios/vic3.jpg",
        "Imagenes/servicios/vic4.jpg"
      ];
      carouselId = "consultoria-carousel";
      break;

    case "mantenimiento":
      description.innerHTML = `
        <div class="text-container">
          <h3>Mantenimiento</h3>
          <p>Garantizamos el correcto funcionamiento de tus equipos a través de un servicio efectivo.</p>
          <ul>
            <li><i class="fa-solid fa-check"></i> Mantenimiento Preventivo</li>
            <li><i class="fa-solid fa-check"></i> Mantenimiento Correctivo</li>
            <li><i class="fa-solid fa-check"></i> Inspección Mecánica y Eléctrica</li>
            <li><i class="fa-solid fa-check"></i> Calibración de Equipos</li>
            <li><i class="fa-solid fa-check"></i> Optimización de Material de Embalaje</li>
            <li><i class="fa-solid fa-check"></i> Automatización</li>
            <li><i class="fa-solid fa-check"></i> Capacitación de Personal Técnico</li>
            <li><i class="fa-solid fa-check"></i> Refaccionamiento</li>
          </ul>
        </div>`;
      imageSources = [
        "Imagenes/servicios/man1.jpg",
        "Imagenes/servicios/man2.jpg",
        "Imagenes/servicios/man3.jpg",
        "Imagenes/servicios/man4.jpg"
      ];
      carouselId = "mantenimiento-carousel";
      break;

    case "monitoreo":
      description.innerHTML = `
        <div class="text-container">
          <h3>Monitoreo</h3>
          <p>Proporcionamos herramientas avanzadas para el seguimiento de equipos y servicios.</p>
          <ul>

            <li><i class="fa-solid fa-check"></i> AGENDAR - Servicios requeridos por nuestros clientes.</li>
            <li><i class="fa-solid fa-check"></i> CREAR - Reportes de servicio técnico y evaluación de Película.</li>
            <li><i class="fa-solid fa-check"></i> ENVIAR - Información en tiempo real a nuestra plataforma.</li>
            <li><i class="fa-solid fa-check"></i> Monitoreo - Status de Equipos - Con actualización mediante la app y nuestra red de soporte técnico.</li>
          </ul>
        </div>`;
      imageSources = [
        "Imagenes/servicios/mon1.jpg",
        "Imagenes/servicios/mon2.jpg",
        "Imagenes/servicios/mon3.jpg",
        "https://integracionav.com/wp-content/uploads/2020/03/91.-centro-de-monitoreo.jpeg"
      ];
      carouselId = "monitoreo-carousel";
      break;
  }

  // Mostrar el carrusel correspondiente
  document.getElementById(carouselId).style.display = "block";

  // Establecer las imágenes del carrusel
  let images = document.querySelectorAll(`#${carouselId} .carousel-image`);

  // Verificar que las imágenes se hayan encontrado antes de asignarles las fuentes
  if (images.length > 0) {
    images.forEach((img, index) => {
      img.src = imageSources[index];
    });
  }

  // Iniciar el carrusel para el servicio seleccionado
  startCarousel(carouselId);
}

// Función para iniciar el carrusel
function startCarousel(carouselId) {
  let currentIndex = 0;
  let images = document.querySelectorAll(`#${carouselId} .carousel-image`);

  if (images.length > 0) {
    setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }, 1000); // Cambiar de imagen cada 3 segundos
  }
}
