/*
 * Modules
 * ========================================================================== */

import $           from 'jquery'
import Application from '../../Application'

/* ========================================================================== */


Application.directive('pointerEvents', () => {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      let   timer    = 0;
      const $window  = $(window);
      const $element = $(element);

      $window.on("scroll", () => {
        clearTimeout(timer);
        if (!$element.hasClass("no-hover")) $element.addClass("no-hover");
        timer = setTimeout(() => $element.removeClass("no-hover"), 500);
      });
    }
  };
});
