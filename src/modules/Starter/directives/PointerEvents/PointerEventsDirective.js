import angular from 'angular';

/**
 * Set pointer-events property to none on scroll for boosting
 * performance (up to 60fps). Disable css hover events
 * @module Pointer Events
 * @param {Object} $timeout - Timeout provider.
 */
const PointerEvents = $timeout => {
  "ngInject";

  return {
    restrict: 'A',
    link(scope) {
      let timeout;
      window.addEventListener('scroll', () => {
        $timeout.cancel(timeout);
        if (!scope.noHover) {
          scope.noHover = 'no-hover';
          return;
        }
        timeout = $timeout(() => scope.noHover = '', 500);  /** Enable it every 500ms */
        scope.$apply();
      });
    }
  };
};

/**
 * Define PointerEvents module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.PointerEvents', []).directive('pointerEvents', PointerEvents).name;
