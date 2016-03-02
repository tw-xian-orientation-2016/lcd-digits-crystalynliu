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