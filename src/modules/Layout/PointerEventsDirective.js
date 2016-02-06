import angular from 'angular';

const PointerEvents = [
  '$timeout',
  $timeout => {
    return {
      restrict: 'A',
      link(scope, $element) {
        let timeout;
        window.addEventListener('scroll', () => {
          $timeout.cancel(timeout);
          if(!$element[0].classList.contains('no-hover')) {
            $element[0].classList.add('no-hover');
          } else {
            timeout = $timeout(() => $element[0].classList.remove('no-hover'), 500);
          }
        });
      }
    };
  }
];

export default angular.module('Workflow.Layout.PointerEvents', []).directive('pointerEvents', PointerEvents).name;
