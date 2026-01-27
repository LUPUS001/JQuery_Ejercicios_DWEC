// Ejercicio 1
$("#btn-ej1").click(function() {
    $.ajax({
        url: 'hola.txt',
        dataType: 'text', // Importante: esperamos texto plano
        success: function(respuesta) {
            // [cite: 15] Si va bien, al contenedor
            $("#resultado").html(respuesta);
        },
        error: function() {
            // [cite: 16] Mensaje general de error
            alert("Error: No se ha podido cargar el archivo.");
        }
    });
});


// Ejercicio 2
$("#btn-ej2").click(function() {
    // [cite: 18] Mostrar logo de carga antes de nada
    $("#resultado").html('<img src="img/spinner.gif" alt="Cargando...">'); 

    $.ajax({
        url: 'fecha.php',
        dataType: 'text',
        success: function(fecha) {
            // [cite: 19] Mostrar la información recibida
            $("#resultado").html("Fecha del servidor: " + fecha);
        },
        error: function(xhr) {
            // [cite: 20] Mostrar el código de error (ej: 404)
            $("#resultado").html("Error código: " + xhr.status);
        }
    });
});


// Ejercicio 3
$("#btn-ej3").click(function() {
    $.ajax({
        url: 'alerta.js',
        dataType: 'script' // Esto hace que el JS se ejecute solo al llegar
    });
});


// Ejercicio 4
$("#btn-ej4").click(function() {
    // [cite: 24] Utilizamos serialize para empaquetar los datos del form
    let datos = $("#miFormulario").serialize(); 

    // [cite: 22] Usamos $.get en lugar de $.ajax
    $.get("login.php", datos, function(respuesta) {
        // [cite: 23] Mostramos el mensaje que devuelve el PHP
        $("#resultado").html(respuesta);
    });
});


// Ejercicio 5
$("#btn-ej5").click(function() {
    let urlAPI = "https://restcountries.com/v3.1/region/europe";

    // [cite: 25] Usamos getJSON específicamente
    $.getJSON(urlAPI)
        .done(function(paises) {
            // Limpiamos contenedor
            $("#resultado").empty();
            
            // Recorremos el array de países
            $.each(paises, function(i, pais) {
                $("#resultado").append("<p>" + pais.name.common + "</p>");
            });
        })
        .fail(function(xhr, status, error) {
            // [cite: 27] Mostrar código y texto del error
            $("#resultado").html("Error: " + xhr.status + " - " + error);
        });
});