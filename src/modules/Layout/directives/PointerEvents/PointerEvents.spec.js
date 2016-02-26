import PointerEvents from './PointerEventsDirective';

describe('Directive: PointerEvents', () => {
  let $compile, $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module(PointerEvents));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
});
