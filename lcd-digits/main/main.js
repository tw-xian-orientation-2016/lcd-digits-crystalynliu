function split(number) {
  var digits = number.split('');
  return digits;
}

function translate(digits,strings){
  var stringSet = [];
  var firststring="";
  var secondString="";
  var thridString="";

  digits.forEach(function(digit){
    firststring += strings[digit][0] + " ";
    secondString += strings[digit][1]+ " ";
    thridString += strings[digit][2]+" ";
  })
  stringSet.push(firststring,secondString,thridString);

  return stringSet.map(function(string){
    return string.substring(0,string.length-1)+"\n";
  })

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