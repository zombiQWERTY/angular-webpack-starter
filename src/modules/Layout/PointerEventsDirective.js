import angular from 'angular';

const PointerEvents = [
  () => {
    return {
      restrict: 'A',
      link(scope, $element) {
        let   timer;
        window.addEventListener('scroll', () => {
          clearTimeout(timer);
          if(!$element[0].classList.contains('no-hover')) { $element[0].classList.add('no-hover'); }
          timer = setTimeout(() => $element[0].classList.remove('no-hover'), 500);
        });
      }
    };
  }
];

export default angular.module('Layout.PointerEvents', []).directive('pointerEvents', PointerEvents).name;
