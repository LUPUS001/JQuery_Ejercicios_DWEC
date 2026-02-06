$(document).ready(function () {
    
    $("input[name='viaje']").click(function(){

        var radioBtn = $("input[name='viaje']:checked").val();
        console.log(radioBtn);

        var inputPrice = $("<input>",{
            type: "text",
            class: "priceset",
            value: (radioBtn === "marruecos")? "600€" : "1000€",
            readonly: true
        });

        $("#precio").empty().append(inputPrice);
    });
});