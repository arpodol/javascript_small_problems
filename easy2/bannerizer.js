function logInBox(string) {
  var borderString = '';
  var gapString ='';
  var i;
  for (i = 0; i < string.length; i += 1) {
    borderString += "-";
    gapString += ' ';
  }
  console.log(`+-${borderString}-+`);
  console.log(`| ${gapString} |`);
  console.log(`| ${string} |`);
  console.log(`| ${gapString} |`);
  console.log(`+-${borderString}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
