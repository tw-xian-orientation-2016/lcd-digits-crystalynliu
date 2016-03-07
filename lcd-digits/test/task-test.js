describe('split()', function() {

  it('correct result when length of number is 1', function() {
    var result = split("9");
    expect(result).toEqual(["9"]);
  });

  it('correct result when length of number is 2', function() {
    var result = split("91");
    expect(result).toEqual(["9","1"]);
  });

  it('correct result when length of number is 3', function() {
    var result = split("910");
    expect(result).toEqual(["9","1","0"]);
  });

})

describe('translate()', function() {
  var strings;

  beforeEach(function(){
    strings = loadDigitsString();
  })

  it('correct result when have one digit', function() {
    var result = translate(["9"],strings);
    expect(result).toEqual(["._.\n","|_|\n","..|\n"]);
  });

  it('correct result when have two digit', function() {
    var result = translate(["9","1"],strings);
    expect(result).toEqual(["._. ...\n","|_| ..|\n","..| ..|\n"]);
  });

  it('correct result when have three digit', function() {
    var result = translate(["9","1","0"],strings);
    expect(result).toEqual(["._. ... ._.\n","|_| ..| |.|\n","..| ..| |_|\n"]);
  });

})

describe('printDigit()', function() {
  var sign;

  beforeEach(function(){
    sign = loadSign();
  })
  
  it('correct result when have one string', function() {
    var result = printDigit(["._.\n","|_|\n","..|\n"],sign);
    expect(result).toEqual("```\n._.\n|_|\n..|\n```\n");
  });

  it('correct result when have two digit', function() {
    var result = printDigit(["._. ...\n","|_| ..|\n","..| ..|\n"],sign);
    expect(result).toEqual("```\n._. ...\n|_| ..|\n..| ..|\n```\n");
  });

  it('correct result when have three digit', function() {
    var result = printDigit(["._. ... ._.\n","|_| ..| |.|\n","..| ..| |_|\n"],sign);
    expect(result).toEqual("```\n._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n```\n");
  });

})