import Starter from '../Index';

describe('Controller: App', () => {
  let $controller, controller;

  beforeEach(angular.mock.module(Starter));

  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_;

    controller  = $controller('StarterController', {  });
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
