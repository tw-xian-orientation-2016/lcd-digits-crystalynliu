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