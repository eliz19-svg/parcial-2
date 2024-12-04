document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector(".email-input");
    const projectInput = document.querySelector(".frame-input");
    const submitButton = document.querySelector(".botton");
  
    submitButton.addEventListener("click", () => {
      const email = emailInput.value.trim();
      const projectDescription = projectInput.value.trim();
  
      if (!email || !projectDescription) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }
  
      alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
      emailInput.value = "";
      projectInput.value = "";
    });
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  