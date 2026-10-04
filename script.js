// URL de Google Apps Script
const URL_GOOGLE =
    "https://script.google.com/macros/s/AKfycbxwLnZJ40ZRDwKmGc8pzARrM0wxbsMAc-upDTCdxBKXv4RLbiVjZoQgOc5LLI_72GsJkQ/exec";

// Obtener el formulario
const formulario =
    document.getElementById("formulario");

// Obtener el mensaje
const mensaje =
    document.getElementById("mensaje");


// Evento cuando se envía el formulario
formulario.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los datos del formulario
    const datos = {

        nombre:
            document.getElementById("nombre").value,

        correo:
            document.getElementById("correo").value,

        clave:
            document.getElementById("clave").value,

        fecha:
            document.getElementById("fecha").value,

        genero:
            document.querySelector(
                'input[name="genero"]:checked'
            )?.value || "",

        carrera:
            document.getElementById("carrera").value,

        comentario:
            document.getElementById("comentario").value,

        acepto:
            document.getElementById("acepto").checked
    };


    // Mostrar mensaje de envío
    mensaje.textContent = "Enviando...";
    mensaje.style.color = "blue";


    // Enviar los datos a Google Apps Script
    fetch(URL_GOOGLE, {

        method: "POST",

        body: JSON.stringify(datos)

    });


    // Mostrar mensaje de confirmación
    mensaje.textContent =
        "Datos enviados correctamente.";

    mensaje.style.color = "green";


    // Limpiar el formulario
    formulario.reset();

});
