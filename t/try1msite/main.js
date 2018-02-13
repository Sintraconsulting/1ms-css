(function() {
    "use strict";

    if (typeof omsOnInit === 'function') {
        omsOnInit(doWork);
    }
    else {
        doWork();
    }

    function doWork() {
        require(['jquery', 'domReady!'], function($) {
          setTimeout(() => {
            $(`<div class="div_central div_ttil omsfloat-100" id="custom-ttil"><div class="row"><div class="target"></div></div></div>`).insertBefore("#top_image");
            $("#contact_form_13").insertBefore("#custom-ttil .target");
            $("#contact_form_13").wrap(`<div class="col-md-6">`);
            $(`<div class="col-md-6"><img src="http://css.oneminutesite.eu/t/try1msite/biznestoner-mockup.png" /></div>`).insertBefore("#custom-ttil .col-md-6");
          }, 300)
        });
    }
})();

