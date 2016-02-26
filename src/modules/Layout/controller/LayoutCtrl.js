import FastClick from 'Fastclick';

export default class LayoutController {  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;

    LayoutController.bootstrap();
  }

  static bootstrap() {
    new FastClick(document.body);
  }
}
