function dms(angle) {

  if (Math.abs(angle) > 360) {
    angle = angle % 360;
  }

  if (angle < 0) {
    angle += 360;
  }
  var deg = Math.floor(angle);
  var min = (angle - deg) * 60;
  var sec =  (min - Math.floor(min)) * 60;
  return `${deg}°${padZeroes(Math.floor(min))}'${padZeroes(Math.floor(sec))}"`
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
