$(document).ready(function() {

    // 1. Detectar el evento (click en botón, cambio en input, etc.)
    $("#tu-boton-id").click(function() {

        // Opcional: Mostrar un "Cargando..." antes de empezar
        $("#contenedor-resultado").html("<p>Cargando datos...</p>");

        // 2. La llamada AJAX
        $.ajax({
            url: 'ruta/al/archivo.json', // ¿A dónde llamamos? (datos.txt, usuarios.json, api.php)
            type: 'GET',                 // ¿Cómo llamamos? (GET para pedir, POST para enviar)
            dataType: 'json',            // ¿Qué esperamos recibir? (json, xml, text, html)
            data: {},                    // (Opcional) Datos que enviamos al servidor {id: 1}
        })
        .done(function(respuesta) {
            // 3. CASO DE ÉXITO: Aquí llega la info (respuesta)
            console.log("Datos recibidos:", respuesta); // SIEMPRE haz esto primero para ver qué llega
            
            // Limpiamos el mensaje de "Cargando..."
            $("#contenedor-resultado").empty();

            // AQUI VA TU LÓGICA DE VISUALIZACIÓN (Ver sección siguiente)
            pintarDatos(respuesta); 
        })
        .fail(function(xhr, status, error) {
            // 4. CASO DE ERROR: Si falla la ruta o el servidor
            console.error("Ha ocurrido un error:", error);
            $("#contenedor-resultado").html("<p style='color:red'>Error al cargar los datos.</p>");
        })
        .always(function() {
            // 5. SIEMPRE SE EJECUTA (Opcional)
            console.log("Petición finalizada (bien o mal).");
        });

    });
});

// Función separada para mantener el código limpio
function pintarDatos(datos) {
    // Tu magia para crear HTML va aquí
}