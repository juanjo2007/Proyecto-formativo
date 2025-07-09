document.addEventListener('DOMContentLoaded', function () {
  const productos = document.querySelector('.productos-container'); 

  if (productos) {
    fetch("/frontend/public/views/components/vista_descripcion_producto.html")
      .then(response => response.text())
      .then(data => {
          productos.innerHTML = data;
        })
  .catch(error => console.log("Error cargando el producto", error));
   }
});
