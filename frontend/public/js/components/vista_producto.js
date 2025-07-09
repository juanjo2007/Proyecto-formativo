document.addEventListener('DOMContentLoaded', function () {
  const producto = document.querySelector('.producto-container'); 

  if (producto) {
    fetch("/frontend/public/views/components/vista_producto.html")
      .then(response => response.text())
      .then(data => {
          producto.innerHTML = data;
        })
  .catch(error => console.log("Error cargando el producto", error));
   }
});
