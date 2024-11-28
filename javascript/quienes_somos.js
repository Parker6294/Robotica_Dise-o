document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out"); // Agregar clase de desvanecimiento

    setTimeout(() => {
      loadingScreen.style.display = "none"; // Ocultar después del desvanecimiento

      const mainContent = document.getElementById("main-content");
      mainContent.style.display = "block"; // Mostrar el contenido
      mainContent.style.opacity = "1"; // Aseguramos que sea visible
    }, 500); // Tiempo del efecto de desvanecimiento
  }, 2000); // Tiempo total de carga (2 segundos)
});

function showService(service) {
  const description = document.getElementById("service-description");
  const image = document.getElementById("service-image");

  switch (service) {
    case "nosotros":
      description.innerHTML = `
                    <div class="text-container">
                        <h3>Nosotros</h3>
                        <p>Somos una empresa 100% mexicana, fundada en 2004, dedicada a ofrecer soluciones innovadoras y de alta calidad. Con sede en Cuautitlán Izcalli, Estado de México, contamos con un equipo altamente capacitado y una sólida infraestructura que nos permite distribuir nuestros productos a todo México y Centroamérica. Nos enorgullece ser un referente en la industria, contribuyendo al crecimiento del sector y garantizando la satisfacción de nuestros clientes a través de un servicio excepcional. ¡Descubre la calidad que nos distingue!</p>
                    </div>`;
      image.src = "https://github.com/Parker6294/Imagenes/blob/main/RODISA070.jpg?raw=true"; // Coloca la imagen que desees o déjalo vacío.
      break;

    case "filosofia":
      description.innerHTML = `
                    <div class="text-container">
                        <h3>Nuestra Filosofía</h3>
                        <p>Constantemente buscamos la satisfacción plena de nuestros Clientes al ofrecer una extensa y completa línea de productos de empaque y embalaje, preocupándonos siempre por brindar un excelente servicio.</p>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> Nuestros Colaboradores constituyen el elemento fundamental para el éxito de nuestra organización, por ello, estamos convencidos de nuestra responsabilidad para apoyarlos como individuos en su desarrollo y bienestar integral.</li>
                            <li><i class="fa-solid fa-check"></i> Nuestra Tecnología de Vanguardia, conocimientos de mercadeo, personal calificado con profesionalismo, proyecciones de crecimiento, comunicación y óptimas estrategias financieras nos permiten crear un valor agregado, logrando de esta manera una alta rentabilidad y un constante crecimiento de nuestra operación.</li>
                        </ul>
                    </div>`;
      image.src =
        "imagenes/Quienes somos/filosofia.jpg"; // Coloca la imagen que desees o déjalo vacío.
      break;

    case "politica_calidad":
      description.innerHTML = `
                    <div class="text-container">
                        <h3>Política de Calidad</h3>
                        <p>En RODISA, nos dedicamos a proveer productos, servicios y tecnología como soluciones de empaque y embalaje industrial; nuestro compromiso es cumplir con los estándares de calidad y valores de sustentabilidad, para satisfacer y superar las expectativas de nuestros clientes.</p>
                    </div>`;
      image.src = "imagenes/Quienes somos/calidad.jpg"; // Coloca la imagen que desees o déjalo vacío.
      break;
  }

  image.style.display = "block"; // Muestra la imagen
}
