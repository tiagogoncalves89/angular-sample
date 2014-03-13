describe('scup index', function() {

  it('should have data', function() {
    browser.get('http://localhost:9876');

    expect(element(by.css('.clients-list')).isPresent()).toBeTruthy();
  });

  it('should have error message', function() {
    browser.get('http://localhost:9876/#/?error=1');

    expect(element(by.css('.error')).isPresent()).toBeTruthy();
  });

});
