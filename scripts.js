$(document).ready(function () {
    //Esconde los nombres para poder usar fadeIn
    $("span").hide();

    //Animacion fadeIn de los nombres
    $(".circulo").mouseenter(function () {
        $(this).find("span").stop().fadeIn();
    });

    //Animacion fadeOut de los nombres
    $(".circulo").mouseleave(function () {
        $(this).find("span").stop().fadeOut();
    });






});