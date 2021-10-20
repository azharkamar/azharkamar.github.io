$(document).ready(function () {
    // Initialise tooltips and popovers
    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="popover"]').popover();

    // Autocomplete
    var searchTags = [
        "ActionScript",
        "AppleScript",
        "ASP",
        "BASIC",
        "C",
        "C++",
        "CSS",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "HTML",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "React",
        "Ruby",
        "Scala",
        "Scheme",
        "Swift"
    ];

    $("#search").autocomplete({
        source: searchTags
    });

    // Avatar toggle
    $(".avatar-toggle").click(function () {
        $(".avatar").toggleClass("border-grey");
    });

    // Clone card into offcanvas
    $(".card-bookmark1").click(function () {
        $(".carousel-inner .card1").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card1").css({"width": "25%", "float": "left",  "margin-right": "1rem"});
        $(".offcanvas-body .card-bookmark1").css("display", "none");
    });

    $(".card-bookmark2").click(function () {
        $(".carousel-inner .card2").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card2").css({"width": "25%", "float": "left",  "margin-right": "1rem"});
        $(".offcanvas-body .card-bookmark2").css("display", "none");
    });
});