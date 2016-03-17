describe('PointerEvents', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have no-hover class while scrolling', () => {
    const script = `document.body.style.height='2000px';window.scrollTo(0,1000);`;
    browser.driver.executeScript(script).then(() => {
      expect(element(by.css('.wrapper')).evaluate('noHover')).toEqual('no-hover');
    });
  });
});
