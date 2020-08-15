function cleanUp(string){
  var regex = /\W+/g;
  return string.replace(regex, ' ');
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
