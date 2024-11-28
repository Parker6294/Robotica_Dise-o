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


function mostrarInformacion(aliado) {
    const imagenAliado = document.getElementById('imagen-aliado');
    const textoAliado = document.getElementById('texto-aliado');
    const linkAliado = document.getElementById('link-aliado');
  
    switch (aliado) {
      case 'aliadoA':
        imagenAliado.src = 'https://facasap.com/wp-content/uploads/2022/11/atlanta-scaled-e1669544705340-1024x642.jpg';
        textoAliado.innerText = 'Descripción del Aliado A.';
        linkAliado.href = 'https://www.atlantastretch.com/es/';
        break;
      case 'aliadoB':
        imagenAliado.src = 'https://i.ytimg.com/vi/nfKjoWL_DlI/maxresdefault.jpg';
        textoAliado.innerText = 'Descripción del Aliado B.';
        linkAliado.href = 'https://comarmesrl.com/en/company/';
        break;
      case 'aliadoC':
        imagenAliado.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROPDHABtp8i7cqU-DlACQQY2OYScRMv0yNA&s';
        textoAliado.innerText = 'Descripción del Aliado C.';
        linkAliado.href = 'https://www.bocedisrl.com/es/';
        break;
      case 'aliadoD':
        imagenAliado.src = 'https://example.com/imagenD.jpg';
        textoAliado.innerText = 'Descripción del Aliado D.';
        linkAliado.href = 'https://example.com/aliadoD';
        break;
      case 'aliadoE':
        imagenAliado.src = 'https://example.com/imagenE.jpg';
        textoAliado.innerText = 'Descripción del Aliado E.';
        linkAliado.href = 'https://example.com/aliadoE';
        break;
      case 'aliadoF':
        imagenAliado.src = 'https://example.com/imagenF.jpg';
        textoAliado.innerText = 'Descripción del Aliado F.';
        linkAliado.href = 'https://example.com/aliadoF';
        break;
      case 'aliadoG':
        imagenAliado.src = 'https://example.com/imagenG.jpg';
        textoAliado.innerText = 'Descripción del Aliado G.';
        linkAliado.href = 'https://example.com/aliadoG';
        break;
      case 'aliadoH':
        imagenAliado.src = 'https://example.com/imagenH.jpg';
        textoAliado.innerText = 'Descripción del Aliado H.';
        linkAliado.href = 'https://example.com/aliadoH';
        break;
      default:
        imagenAliado.src = '';
        textoAliado.innerText = 'Selecciona un aliado para ver más información.';
        linkAliado.href = '#';
        break;
    }
  }
  


