const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector(".responsive-menu");
const closeMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".nav-menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
    });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

// para cambiar de color el fondo de los inputs del formulario de contacto
var form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "whitesmoke";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);

// Controlo el contenido del formulario y envio mensaje de confirmacion
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("form").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
  evento.preventDefault();
  let nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('Debes completar el campo Nombre');
    document.form.nombre.focus();
    return false;
  }
  let mail = document.getElementById('mail').value;
  if (mail.length == 0) {
    alert('Debes completar el campo Correo electronico');
    document.form.mail.focus();
    return false;
  }
  let mensaje = document.getElementById('mensaje').value;
if (mensaje.length == 0) {
  alert('Debes completar el campo Mensaje');
  document.form.mensaje.focus();
  return false;
}
  alert('Consulta enviada con éxito!');
  //this.submit();
  form.reset();
}
// EFECTO IMAGEN PORTFOLIO
document.getElementById('img-portfolio').addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY
  if (e.target.className === 'portfolio-box') {
    e.target.children[0].style.top = (y+15) + 'px'
    e.target.children[0].style.left = (x+15) + 'px'
    console.log(x-600,y-600)
  }
  if (e.target.parentNode.className === 'portfolio-box') {
    e.target.parentNode.children[0].style.top = (y+15) + 'px'
    e.target.parentNode.children[0].style.left = (x+15) + 'px'
  }
})
