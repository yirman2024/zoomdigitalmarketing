document.addEventListener("DOMContentLoaded", function() {
    // Manejo del formulario
    let leadForm = document.getElementById("leadForm");
    if (leadForm) {
        leadForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Obtener datos del formulario
            let name = document.getElementById("name").value.trim();
            let phone = document.getElementById("phone").value.trim();

            if (name === "" || phone === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Mensaje personalizado
            let message = `Hola, mi nombre es ${name} y quiero más información sobre cómo generar ingresos en dólares.`;
            let whatsappURL = `https://wa.me/573117947704?text=${encodeURIComponent(message)}`;
            
            // Redirigir a WhatsApp
            window.location.href = whatsappURL;
        });
    }

    // Manejo del botón independiente
    let whatsappButton = document.getElementById("whatsappButton");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function() {
            let telefono = "573117947704";  
            let mensaje = encodeURIComponent("¡Hola! Estoy interesado en obtener más información sobre cómo generar ingresos en dólares. ¿Me puedes ayudar?");
            let url = `https://wa.me/${telefono}?text=${mensaje}`;

            // Redirigir a WhatsApp
            window.location.href = url;
        });
    }
});






