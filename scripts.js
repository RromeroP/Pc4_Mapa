$(document).ready(function () {
    //Esconde los nombres y datos para poder usar fadeIn y slideDown
    $("span").hide();
    $(".datos").slideUp(0);

    //Animacion fadeIn de los nombres
    $(".circulo").mouseenter(function () {
        $(this).find("span").stop().fadeIn();
    });

    //Animacion fadeOut de los nombres
    $(".circulo").mouseleave(function () {
        $(this).find("span").stop().fadeOut();
    });

    //Animacion slideDown de los datos
    $(".circulo").click(function () {
        var this_div = $(this).find("div");
        var index = this_div.attr("id");

        //Accedemos al servidor json
        $.ajax({
            url: "http://localhost:3000/ciudad"
        }).then(function (data) {
            //Accedemos a los datos que necesitamos
            this_div.find(".name").html(data[index].name);
            this_div.find(".max").html(data[index].max + "Cº");
            this_div.find(".min").html(data[index].min + "Cº");
            this_div.find(".imagenes").attr("src", "img/" + data[index].weather + ".png");
        });

        //Si otros datos estan abiertos, los esconde
        if ($(".datos").is(":visible")) {
            $(".datos").slideUp();
        }

        $(this).find(".datos").stop().slideDown(1500,"swing");
        event.stopPropagation();
    });

    //Animacion slideUp de los datos
    $(document).on("click", function () {
        $(".datos").slideUp();
    });

});