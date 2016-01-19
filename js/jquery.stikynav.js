(function ($) {
    $.fn.stickyNav = function (options) {
        var settings = $.extend({
            hgt: 205
        }, options);

        return this.each(function () {
            var stickyNavTop = settings.hgt;
            console.log(stickyNavTop);


            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();

                console.log(stickyNavTop + ", " + scrollTop);

                if (stickyNavTop < scrollTop) {
                    $('.sticky-nav').addClass('sticky-nav-scroll');
                } else {
                    $('.sticky-nav').removeClass('sticky-nav-scroll');
                }
            });
        });
    }
})(jQuery);