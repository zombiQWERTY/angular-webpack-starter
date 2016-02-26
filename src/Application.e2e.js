describe('Application', () => {
  beforeEach(() => {
    browser.get('/');
  });


  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Title');
  });

  it('should have #app-container', () => {
    expect(element(by.css('#app-container')).isPresent()).toEqual(true);
  });

  it('should have application', () => {
    expect(element(by.css('.wrapper')).isPresent()).toEqual(true);
  });


});
