// Formulario de contacto
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (email === '' || message === '') {
    alert('Por favor, completa todos los campos.');
  } else {
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo.');
    form.reset();
  }
});
