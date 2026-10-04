const URL = "https://script.google.com/macros/s/AKfycbzabAo2z4BzOESZmfCUJxfE4G2jNVubGPXii3sc3brDtHngaaz6UmpzRM7QBfTxKnpFIA/exec";

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        clave: document.getElementById("clave").value,
        fecha: document.getElementById("fecha").value,

        genero: document.querySelector(
            'input[name="genero"]:checked'
        )?.value || "",

        carrera: document.getElementById("carrera").value,

        comentario: document.getElementById("comentario").value,

        acepto: document.getElementById("acepto").checked
    };

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(datos)
    })
    .then(respuesta => respuesta.json())
    .then(resultado => {

        alert(resultado.mensaje);

        formulario.reset();

    })
    .catch(error => {

        console.error(error);

        alert("Ocurrió un error al enviar los datos");

    });

});
