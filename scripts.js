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

        //Si otros datos estan abiertos, los esconde
        if ($(".datos").is(":visible")) {
            $(".datos").slideUp();
        }

        $(this).find(".datos").stop().slideDown();
        event.stopPropagation();
    });

    //Animacion slideUp de los datos
    $(document).on("click", function () {
        $(".datos").slideUp();
    });

});