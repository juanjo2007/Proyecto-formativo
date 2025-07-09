document.addEventListener('DOMContentLoaded', function () {
  const btnComprar = document.querySelector('.btn-comprar'); // Selecciona el botón

  if (btnComprar) {
    btnComprar.addEventListener('click', function () {
      fetch("/frontend/public/views/components/vista_descripcion_producto.html")
        .then(response => response.text())
        .then(data => {
          const contenedor = document.querySelector('.productos-container');
          contenedor.innerHTML = data;
        })
        .catch(error => console.error("Error cargando el producto", error));
    });
  }
});
