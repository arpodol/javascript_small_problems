function triangle(integer) {
  var i;
  var j;
  var substr;
  for (i = 0; i <= integer; i += 1){
    substr = '';
    for (j = 0; j < integer; j += 1) {
      if (j < i){
        substr += '*';
      } else {
        substr += ' ';
      }
    }

    console.log(substr.split("").reverse().join(""));
  }
}



triangle(5);



triangle(9);
