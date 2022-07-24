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
// Scroll to top
window.onscroll = function() {
    if (window.pageYOffset == 0) {
        document.getElementById("to-top").style.display = "none";
    } else {
        document.getElementById("to-top").style.display = "block";
    }
}
document.getElementById("to-top").onclick = function() { scrollToTop() };
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// For product page
if (document.querySelector(".product")) {
    // Product Carousel
    const productCarousel = new Carousel(document.querySelector("#product-carousel"), {
        Dots: false,
    });
    const thumbCarousel = new Carousel(document.querySelector("#product-thumb-carousel"), {
        Sync: {
            target: productCarousel,
            friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: false,
    });
}

// Catalog List Grid view switcher
$("#list-view").click(function(){
    $("#grid-view").removeClass("active");
    $("#list-view").addClass("active");
    $("#grid-list").removeClass("grid");
    $("#grid-list").addClass("list");
});
$("#grid-view").click(function(){
    $("#list-view").removeClass("active");
    $("#grid-view").addClass("active");
    $("#grid-list").removeClass("list");
    $("#grid-list").addClass("grid");
});

// Decrease, increase product amount
let x = 1;
$(".product-amount input").attr('value', x);
$(".product-amount-increase").click(function(){
    $(".product-amount input").attr('value', ++x);
});
$(".product-amount-decrease").click(function(){
    if (x > 1) {
        $(".product-amount input").attr('value', --x);
    }
});
