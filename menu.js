const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");
const cerrar = document.getElementById("cerrar");

hamburguesa.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})

cerrar.addEventListener("click", function() {
    menu.style.display = "none";
  });