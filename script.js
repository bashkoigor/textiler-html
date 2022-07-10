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