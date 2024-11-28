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



// Mostrar la información del primer aliado (por defecto) al cargar la página
window.onload = function() {
  mostrarInformacion("aliadoA"); // Puedes cambiar "aliadoA" a otro valor si deseas que otro aliado sea el predeterminado
};


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos




// Obtener elementos
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Manejar el clic en los enlaces
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const imageUrl = this.getAttribute('data-image');
    modalImage.src = imageUrl;
    modal.style.display = 'block';
  });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
