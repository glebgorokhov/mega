$(window).on('event.page.speed.optimizer.done', function () {

    var items = $('.js-auto-equivalent-heighter');

    if (items.length) {
        items.each(function (i, item) {
            if ($(item).children().length > 0) {
                new Theme_BannerEquivalentScroller(item);
            }
        });
    }

});