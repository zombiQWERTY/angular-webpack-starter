import Home from '../Index';

describe('Controller: Home', () => {
  let TitleService, $controller, controller;

  beforeEach(() => {
    angular.mock.module(Home);
    angular.mock.module('Starter.App.TitleService');
  });

  beforeEach(angular.mock.inject((_$controller_, _TitleService_) => {
    $controller  = _$controller_;
    TitleService = _TitleService_;
    controller   = $controller('HomeController', { TitleService });
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined with TitleService', () => {
    expect(TitleService).toBeDefined();
  });
});

