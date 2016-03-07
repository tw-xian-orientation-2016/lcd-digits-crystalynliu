function split(number) {
  var digits = number.split('');
  return digits;
}

function translate(digits,strings){
  var stringSet = [];

  for(var i = 0;i<3;i++){
    var string="";
    digits.forEach(function(digit){
      string += strings[digit][i] + " ";
    })
    string = string.substring(0,string.length-1)+"\n";
    stringSet.push(string);
  }
  
  return stringSet;
}

function printDigit(stringSet,sign){
  var text = sign;
  
  stringSet.forEach(function(string){
    text+=string;
  })
  text+=sign;

  return text;
}

function lcdDigit(number){
  var sign = loadSign();
  var strings = loadDigitsString();

  var digits = split(number);
  var stringSet = translate(digits,strings);
  console.log(printDigit(stringSet,sign));
}