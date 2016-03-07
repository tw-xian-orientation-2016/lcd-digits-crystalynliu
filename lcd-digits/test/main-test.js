describe('lcdDigit()', function() {
  
  it('correct result when number = 9', function() {
    spyOn(console, 'log');

    lcdDigit("9");

    var expectText ="```\n._.\n|_|\n..|\n```\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct result when number = 91', function() {
    spyOn(console, 'log');

    lcdDigit("91");

    var expectText ="```\n._. ...\n|_| ..|\n..| ..|\n```\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct result when number = 910', function() {
    spyOn(console, 'log');

    lcdDigit("910");

    var expectText ="```\n._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n```\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

})