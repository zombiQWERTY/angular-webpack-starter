import FastClick from 'Fastclick';

export default class LayoutController {  /*@ngInject*/
  constructor($scope, $location) {
    this.$scope    = $scope;
    this.$location = $location;

    this.$scope.getRoute = this.route;
    LayoutController.bootstrap();
  }

  static bootstrap() {
    new FastClick(document.body);
  }

  get route() {
    return this.$location.url();
  }
}
