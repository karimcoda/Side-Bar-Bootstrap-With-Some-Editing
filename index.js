jQuery(document).ready(function() {
    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('a.scroll-link').on('click', function(e) {
        e.preventDefault();
        scroll_to($(this), 0);
    });
    function scroll_to(clicked_link, nav_height) {
        var element_class = clicked_link.attr('href').replace('#', '.');
        var scroll_to = 0;
        if(element_class != '.top-content') {
            element_class += '-container';
            scroll_to = $(element_class).offset().top - nav_height;
        }
        if($(window).scrollTop() != scroll_to) {
            $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
        }
    }

    $('.to-top a').on('click', function(e) {
        e.preventDefault();
        if($(window).scrollTop() != 0) {
            $('html, body').stop().animate({scrollTop: 0}, 1000);
        }
    });
    $('a.btn-customized-dark').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').removeClass('light');
    });
    $('a.btn-customized-light').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('light');
    });


});
