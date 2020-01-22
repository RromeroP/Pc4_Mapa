$(document).ready(function () {
    //Esconde los nombres y datos para poder usar fadeIn y slideDown
    $("span").hide();
    $(".datos").slideUp(0);
    var server = false;

    //Animacion fadeIn de los nombres
    $(".circulo").mouseenter(function () {
        $(this).find("span").stop().fadeIn();
    });

    //Animacion fadeOut de los nombres
    $(".circulo").mouseleave(function () {
        $(this).find("span").stop().fadeOut();
    });

    //Boton para cambiar de servidor
    $("#cambio").click(function () {
        if (server) {
            $("#cambio").html("Estas offline")
            server = false;
        } else {
            $("#cambio").html("Estas online")
            server = true;
        }
    });

    //Animacion slideDown de los datos
    $(".circulo").click(function () {
        var this_div = $(this).find("div");
        var c_id = this_div.attr("id");
        var server_url = "";

        //Podemos cambiar entre el servidor local y el de openweather usando este if
        if (server) {
            server_url = "https://api.openweathermap.org/data/2.5/weather?id=" + c_id + "&APPID=2680cb661090f833ea69bc4222cec8ea";
        } else {
            server_url = "http://localhost:3000/ciudad/" + c_id;
        }

        $.ajax({
            url: server_url
        }).then(function (data) {
            //Accedemos a los datos que necesitamos
            this_div.find(".name").html(data.name);
            this_div.find(".max").html((data.main.temp_max - 273.15).toFixed(2) + "Cº");
            this_div.find(".min").html((data.main.temp_min - 273.15).toFixed(2) + "Cº");
            this_div.find(".imagenes").attr("src", "img/" + data.weather[0].main + ".png");
        });

        //Si otros datos estan abiertos, los esconde
        if ($(".datos").is(":visible")) {
            $(".datos").slideUp();
        }

        $(this).find(".datos").stop().slideDown(1500, "swing");
        event.stopPropagation();
    });

    //Animacion slideUp de los datos
    $(document).on("click", function () {
        $(".datos").slideUp();
    });

});