var SQMETERS_TO_SQFEET = 10.7369;
var SQFEET_TO_SQMETERS = 0.09313675;
var units;
var conversion;
var stringArray;

do {
  units = prompt("Are your units in meters or feet? Type 'M' or 'F'.")
} while(units !== 'M' && units !== 'F')

if (units === 'F') {
    stringArray = ['feet', 'square feet' , 'square meters'];
    conversion = SQFEET_TO_SQMETERS;
} else {
  stringArray = ['meters', 'square meters' , 'square feet'];
  conversion = SQMETERS_TO_SQFEET;
}

var length = parseInt(prompt(`Enter the length of the room in ${stringArray[0]}:`), 10);
var width = parseInt(prompt(`Enter the width of the room in ${stringArray[0]}:`), 10);
var area = length * width;
var areaConverted = area * conversion;
console.log(`The area of the room is ${area} ${stringArray[1]} (${areaConverted} ${stringArray[2]}).`)
