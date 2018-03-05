$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('a.nav-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 500);
        return false;
    });

    //renderSlideshow();
});

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    $('#modalValid').modal('show')
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

var renderSlideshow = function () {

    $("#slidesbeforeafter").html("");
    for (var i = 1; i <= 31; i++) {
        var filename = i < 10 ? "0" + i : "" + i;
        filename += ".jpg";

        var html = "<div><a href='assets/images/before-after/" + filename + "' data-lightbox='roadtrip'>";
        html += "<img src='assets/images/before-after/" + filename + "' alt=''></a></div>";

        $("#slidesbeforeafter").append(html);
        console.log(filename);
    }
};