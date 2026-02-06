$(document).ready(function(){

    // --- PARTE A: Poner precio (Basado en Ej4.html) ---
    // Al hacer click en cualquier radio button...
    $(":radio").click(function(){
        // 1. Cogemos el valor (600 o 1000)
        var coste = $(this).val(); 
        
        // 2. Creamos el input dinámicamente con ese valor
        $("#cajaPrecio").html("<input type='text' value='" + coste + "'>");
    });


    // --- PARTE B: Extras y Animación (Basado en Ej1.html y 3.html) ---
    // Al hacer click en el checkbox...
    $("#btnExtras").click(function(){
        
        // 1. Carga Asíncrona (Petición AJAX pura de jQuery)
        $.ajax({
            url: "extras.txt",
            success: function(info) {
                // Escribimos el texto del fichero dentro de la caja
                $("#cajaExtras").html(info);

                // 2. Animación (Borde a 20px y Texto a 25pt)
                $("#cajaExtras").animate({
                    "borderWidth": "20px",  
                    "fontSize": "25pt"
                });
            }
        });
    });

});