$(document).ready(function () {
    
    $("#extras").change(function () { 
        
        if($(this).prop("checked")){

            $.ajax({
                type: "GET",
                url: "extras.txt",
                success: function(response){
                    $('#divText').html(response);
                    $('#divText').show();

                    //animacion de borde y tamaño de fuente
                    $('#divText').css({border: '5px solid #E6A4B4'}).animate({
                        borderWidth: 20
                    }, 500);

                    $('#divText').css({fontSize: '12px'}).animate({
                        fontSize: '25px'
                    }, 500);
                }
            });
        } else{
            $('#divText').hide();
        }
        
    });

});