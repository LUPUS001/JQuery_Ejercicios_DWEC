<?php
    // Recoge el dato 'nombre' que le envía el HTML
    $nombreRecibido = $_POST['nombre'];

    // Devuelve una frase
    echo "Hola " . $nombreRecibido . ", este mensaje viene del servidor PHP.";
?>