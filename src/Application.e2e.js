/* Copyright (C) Simply.info
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pavel Zinovev <zombiqwerty@yandex.ru>, February 2016
 */

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

  it('should have content', () => {
    expect(element(by.css('.page-content')).isPresent()).toEqual(true);
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
