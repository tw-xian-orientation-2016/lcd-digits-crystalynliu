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

  it('correct result when have one digit', function() {
    var result = translate(["9"]);
    expect(result).toEqual(["._.\n","|_|\n","..|\n"]);
  });

  it('correct result when have two digit', function() {
    var result = translate(["9","1"]);
    expect(result).toEqual(["._. ...\n","|_| ..|\n","..| ..|\n"]);
  });

  it('correct result when have three digit', function() {
    var result = translate(["9","1","0"]);
    expect(result).toEqual(["._. ... ._.\n","|_| ..| |.|\n","..| ..| |_|\n"]);
  });

})