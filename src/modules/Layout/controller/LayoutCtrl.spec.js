import Layout from '../Index';

describe('Controller: Layout', () => {
  beforeEach(module(Layout));

  let $controller;

  beforeEach(inject(_$controller_ => $controller = _$controller_));

  describe('Is Layout defined?', () => {
    it('Is Layout defined?', () => {
      const $scope = {};
      const controller = $controller('LayoutController', { $scope });
      expect(controller).toBeDefined();
    });
  });
});
