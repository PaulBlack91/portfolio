
// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// scroll sections 

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      // active navbar link 
      navLinks.forEach(links => {
        links.classList.remove('activo')
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('activo')
      })
      sec.classList.add('show-animate')
    } 
    else{
      sec.classList.remove('show-animate')
    }
  })


  // sticky header 
  let header = document.querySelector('header')

  header.classList.toggle('sticky', window.scrollY > 100)

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}




document.querySelector('.btn-box.btns').addEventListener('click', function(event) {
  var messageInput = document.getElementById('message');
  var messageValue = messageInput.value.trim(); // Obtener el valor del mensaje y eliminar espacios en blanco al principio y al final

  // Verificar si el campo de mensaje no está vacío
  if (messageValue !== '') {
    alert('Mensaje enviado');
  } else {
    alert('Por favor, escribe un mensaje antes de enviar.');
    event.preventDefault(); // Evitar que el formulario se envíe si el campo de mensaje está vacío
  }
}); 