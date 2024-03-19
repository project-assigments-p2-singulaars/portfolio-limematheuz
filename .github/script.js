document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var projectsSlider = document.getElementById('projects-slider');
  
    // Agregar eventos de clic a los botones
    prevBtn.addEventListener('click', function() {
      projectsSlider.scrollLeft -= 200; // Cambia el valor según la cantidad que quieras desplazar
    });
  
    nextBtn.addEventListener('click', function() {
      projectsSlider.scrollLeft += 200; // Cambia el valor según la cantidad que quieras desplazar
    });
  });