import PointerEvents from './PointerEventsDirective';

describe('Directive: PointerEvents', () => {
  let $compile;

  beforeEach(angular.mock.module(PointerEvents));

  beforeEach(inject((_$compile_) => {
    $compile = _$compile_;
  }));

  it('should be defined', () => {
    expect($compile).toBeDefined();
  });
});
