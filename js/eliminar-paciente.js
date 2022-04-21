var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function (e) {
  e.target.parentNode.classList.add("fadeOut");
  setTimeout(function () {
    e.target.parentNode.remove();
  }, 500);
});
