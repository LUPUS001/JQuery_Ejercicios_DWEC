$(document).ready(function() {

    // ---------------------------------------------------------
    // PARTE 1: RADIO BUTTONS Y CREACIÓN DINÁMICA
    // Fuente: 'Ej4.html' (Carpeta jQuery Básico - Formularios)
    // ---------------------------------------------------------
    
    // Usamos el evento 'change' como en Ej4 para detectar selección
    $("input[name='destino']").change(function() {
        
        // Obtenemos el valor del radio seleccionado (600 o 1000)
        // Tal cual se hace en Ej4 usando $(this).val()
        var precio = $(this).val();

        // El enunciado dice: "El campo de precio inicialmente no está, se creará de forma dinámica"
        // Creamos un input o texto dinámicamente e inyectamos el valor.
        var htmlDinamico = "Precio final: <input type='text' value='" + precio + "€' readonly>";
        
        // Inyectamos en el HTML (Manipulación DOM básica vista en Bloque 1)
        $("#contenedorPrecio").html(htmlDinamico);
    });


    // ---------------------------------------------------------
    // PARTE 2: CHECKBOX, AJAX Y ANIMACIÓN
    // Fuentes: 
    //   - AJAX: 'Ej1.html' (Carpeta AJAX con jQuery / traerFicheroJS)
    //   - Animación: '3.html' (Carpeta Efectos - Animate)
    // ---------------------------------------------------------

    $("#checkExtras").change(function() {
        
        // Si el checkbox está marcado...
        if($(this).is(":checked")) {
            
            // 1. CARGA ASÍNCRONA ($.ajax)
            // Copiado de estructura 'Ej1.html' (AJAX con jQuery)
            $.ajax({
                url: "extras.txt", // Fichero en el servidor
                dataType: "text",  // Esperamos texto plano
                success: function(respuesta) {
                    
                    // Metemos el texto del fichero en el div
                    $("#infoExtras").html(respuesta);

                    // 2. ANIMACIÓN
                    // Copiado de estructura '3.html' (Efectos)
                    // El enunciado pide: "borde 20px ancho y tamaño 25pt"
                    $("#infoExtras").animate({
                        borderWidth: "20px", // Ojo: en jQuery es camelCase (border-width -> borderWidth)
                        fontSize: "25pt",
                        padding: "20px"      // Añadido extra para que no se vea apiñado
                    }, 1500); // Duración de la animación (1.5s)
                },
                error: function() {
                    alert("Error al cargar el fichero extras.txt");
                }
            });

        } else {
            // Opcional: Si desmarcas, limpiamos o reseteamos (no lo pide explícitamente pero queda bien)
            $("#infoExtras").empty();
            $("#infoExtras").css({ "border-width": "1px", "font-size": "16px" });
        }
    });

});


/* 
$("input[name='destino']").change(...) y $(this).val():

    Sacado de Ej4.html (jQuery Básico). Ahí aprendiste a manejar formularios y sacar valores.

$.ajax({ url: ..., success: ... }):

    Sacado de Ej1.html (Carpeta AJAX jQuery). Es la estructura estándar que te dieron para no usar XMLHttpRequest.

.animate({ borderWidth: "20px", fontSize: "25pt" }):

    Sacado de 3.html (Carpeta Efectos). Es el ejercicio donde se mueven cajas y se cambian tamaños con .animate().
*/