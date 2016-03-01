import PointerEvents from './PointerEventsDirective';

describe('Directive: PointerEvents', () => {
  let $compile, $rootScope;

  beforeEach(angular.mock.module(PointerEvents));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile   = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should be defined', () => {
    expect($compile).toBeDefined();
  });
});
