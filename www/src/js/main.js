// init
'use strict';

// Touch Support
//--------------------------------------
window.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
window.SUPPORT_TOUCH = ('ontouchstart' in window);
window.SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

//= libs/jquery-3.1.1.min.js

(function ($) {

    $(document).ready(function () {
        //= libs/jquery-3.1.1.min.js
        //= modules/links.js
    });

    // Custom Events
    //--------------------------------------

    //= modules/custom-events.js

})(jQuery);