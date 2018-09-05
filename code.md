One: Format a string of names like 'Bart, Lisa & Maggie'.
function list(names){
  let answer = ''
  
  for (i = 0; i < names.length; i++){
    var handle = names[i];
    answer += handle.name +
      (i < (names.length - 2) ? ', ' : 
        (i === (names.length - 2) ? ' & ' : ''));
  }
  console.log(answer)
  return answer
}

Two: