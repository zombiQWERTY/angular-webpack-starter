import Home from '../Index';

describe('Controller: Home', () => {
  beforeEach(module(Home));

  let $controller;

  beforeEach(inject(_$controller_ => $controller = _$controller_));

  describe('Is Home defined?', () => {
    it('Is Home defined?', () => {
      const $scope = {};
      const controller = $controller('HomeController', { $scope });
      expect(controller).toBeDefined();
    });
  });
});
