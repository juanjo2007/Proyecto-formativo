document.addEventListener("DOMContentLoaded", function (){
    const direction = document.querySelector(".form-container");

    if(direction){
      fetch("/frontend/public/views/components/agregar_direccion.html")
        .then(response => response.text())
        .then(data => {
          form.innerHTML = data;
        })
    .catch(error => console.log("Error", error));
    } 
});