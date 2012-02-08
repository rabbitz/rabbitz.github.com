(function($) {
    $('.entry').each(function(i) {
        var _i = i;
        $(this).find('img').each(function() {
            var alt = $(this).attr('alt');
            if (alt != '') {
                $(this).after('').wrap('<a href="' + $(this).attr('src')
                    + '" class="fancybox" title="' + alt + '" rel="gallery' + _i + '" />');
            } else {
                $(this).wrap('<a href="' + $(this).attr('src') + '" class="fancybox" rel="gallery' + _i + '" />');
            }
        });
    });
    $('.fancybox').fancybox();
})(jQuery);