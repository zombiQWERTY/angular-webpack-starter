import TitleService from './TitleService';

describe('Service: TitleService', () => {
  let $compile;

  beforeEach(inject((_$compile_) => {
    $compile = _$compile_;
  }));

  it('should be defined', () => {
    expect($compile).toBeDefined();
  });
});
