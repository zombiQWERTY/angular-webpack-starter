import App from '../Index';

describe('Controller: App', () => {
  let $scope, $controller, controller;

  beforeEach(angular.mock.module(App));

  beforeEach(angular.mock.inject((_$controller_, _$rootScope_) => {
    $controller = _$controller_;
    $scope      = _$rootScope_.$new();

    controller  = $controller('AppController', { $scope });
    $scope.$digest();
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have scope', () => {
    expect(typeof controller.$scope).toBe('object');
  });
});
