describe('Home page', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Home –– Angular Webpack Starter Kit');
  });

  it('should have page content', () => {
    expect(element(by.css('.page_home')).isPresent()).toEqual(true);
  });

  it('should get the current state', function (){
    const currentStateName = browser.executeAsyncScript((callback) => {
      const el       = document.querySelector('html');
      const injector = angular.element(el).injector();
      const service  = injector.get('$state');

      callback(service.current.name);
    });

    expect(currentStateName).toEqual('home');
  });
});
