(function ($) {
    $.fn.scrollToTop = function () {

        return this.each(function () {
            $(function () {

                // hide #back-top first
                $("#scroll-top").hide();

                // fade in #back-top
                $(function () {
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 100) {
                            $('#scroll-top').fadeIn();
                        } else {
                            $('#scroll-top').fadeOut();
                        }
                    });


                });

            });
        });
    }
})(jQuery);