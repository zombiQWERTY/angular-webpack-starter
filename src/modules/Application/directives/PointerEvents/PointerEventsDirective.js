import angular from 'angular';

/**
 * Set pointer-events property to none on scroll for boosting
 * performance (up to 60fps). Disable css hover events
 * @module Pointer Events
 * @param {Object} $timeout - Timeout provider.
 */
const PointerEvents = $timeout => {  /*@ngInject*/
  return {
    restrict: 'A',
    link(scope, $element) {
      let timeout;
      window.addEventListener('scroll', () => {
        $timeout.cancel(timeout);

        if(!$element[0].classList.contains('no-hover')) {
          $element[0].classList.add('no-hover');
        }

        if($element[0].classList.contains('no-hover')) {
          timeout = $timeout(() => $element[0].classList.remove('no-hover'), 500);  /** Enable it every 500ms */
        }
      });
    }
  };
};

/**
 * Define PointerEvents module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module
 */
export default angular.module('Workflow.App.PointerEvents', []).directive('pointerEvents', PointerEvents).name;
