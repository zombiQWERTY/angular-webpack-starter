import ThirdParties from './ThirdPartiesDirective';

describe('Directive: ThirdParties', () => {
  let $compile, $rootScope;

  beforeEach(angular.mock.module(ThirdParties));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile   = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should be defined', () => {
    expect($compile).toBeDefined();
  });
});
