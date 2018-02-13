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
              $(`<div class="div_central div_ttil omsfloat-100" id="custom-ttil"><div class="row"></div></div>`).insertBefore("#top_image");
              $("#contact_form_14").insertBefore("#custom-ttil .row");
              $("#contact_form_14").wrap(`<div class="col-md-6">`);
          }, 100)
        });
    }
})();

