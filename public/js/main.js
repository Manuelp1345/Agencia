$(document).ready(function() {

    if ($("html").scrollTop != 0) {
        $("html").animate({
            scrollTop: 0
        }, 1000, 'swing');

    }


    let nosotros = $("#nosotros").offset().top,
        galeria = $("#galeria").offset().top,
        contacto = $("#contacto").offset().top



    window.onresize = () => {
        nosotros = $("#nosotros").offset().top,
            galeria = $("#galeria").offset().top,
            contacto = $("#contacto").offset().top

    }
    $("#btnInicio,#logo").on("click", (e) => {
        e.preventDefault()
        $("html").animate({
            scrollTop: 0
        }, 1000, 'swing');
    })
    $("#btnNosotros").on("click", (e) => {
        e.preventDefault()
        $("html").animate({
            scrollTop: nosotros - 80
        }, 1000, 'swing');
    })
    $("#btnGaleria").on("click", (e) => {
        e.preventDefault()
        $("html").animate({
            scrollTop: galeria - 80
        }, 1000, 'swing');
    })
    $("#btnContacto").on("click", (e) => {
        e.preventDefault()
        $("html").animate({
            scrollTop: contacto - 80
        }, 1000, 'swing');
    })

    $("#slide_nav_button").click(function() {
        $('#slide_menu').animate({
            width: 'toggle',
            height: "toggle"
        }, 500);
    });

    if (screen.availWidth < 767) {
        $('#slide_menu li').click(function() {
            $('#slide_menu').animate({
                width: 'toggle',
                height: "toggle"
            }, 500);

        });
    }
})