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
$(".product-amount-increase").click(function() {
    let x = $(this).siblings(".product-amount input").val();
    $(this).siblings(".product-amount input").attr('value', ++x);
});
$(".product-amount-decrease").click(function() {
    let x = $(this).siblings(".product-amount input").val();
    if (x > 1) {
        $(this).siblings(".product-amount input").attr('value', --x);
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

// Hide and show password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#field-password');
togglePassword.addEventListener('click', () => {
    // Toggle the type attribute using
    // getAttribure() method
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if (togglePassword.classList.contains('fa-eye-slash')) {
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    } else {
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    }
});
