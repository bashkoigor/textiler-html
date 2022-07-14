$(document).ready(function(){
    $(".vertical-menu").click(function() {
        $( this ).find(".menu").toggleClass("show-menu");
    });
    $( ".vertical-menu .menu .item" ).hover(
        function() {
            // If exist submenu
            if ($( this ).find(".dropdown-menu ul").length) {
                $( this ).find("a").addClass('active');
            }
            $( this ).find(".dropdown-menu").css("visibility", "visible");
            $( this ).find(".dropdown-menu").css("opacity", 1);
        }, function() {
            $( this ).find("a").removeClass('active');
            $( this ).find(".dropdown-menu").css("visibility", "hidden");
            $( this ).find(".dropdown-menu").css("opacity", 0);
        }
    );
});

// Recommended product carousel
const obRecommended1 = document.querySelector("#recommended1");
if (obRecommended1) {
    const recommended1 = new Carousel(obRecommended1, {
        slidesPerPage: 1,
        center: false
    });
}
const obRecommended2 = document.querySelector("#recommended2");
if (obRecommended2) {
    const recommended2 = new Carousel(obRecommended2, {
        slidesPerPage: 1,
        center: false
    });
}
const obRecommended3 = document.querySelector("#recommended3");
if (obRecommended3) {
    const recommended3 = new Carousel(obRecommended3, {
        slidesPerPage: 1,
        center: false
    });
}
const obBlog = document.querySelector("#blog-carousel");
if (obBlog) {
    const blog = new Carousel(obBlog, {
        slidesPerPage: 1,
        center: false
    });
}
