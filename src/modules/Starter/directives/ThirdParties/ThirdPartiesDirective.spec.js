import ThirdParties from './ThirdPartiesDirective';

describe('Directive: ThirdParties', () => {
  let $compile;

  beforeEach(angular.mock.module(ThirdParties));

  beforeEach(inject((_$compile_) => {
    $compile = _$compile_;
  }));

  it('should be defined', () => {
    expect($compile).toBeDefined();
  });
});
