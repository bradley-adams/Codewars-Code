// One: Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){
  let answer = ''
  
  for (i = 0; i < names.length; i++){
    var handle = names[i];
    answer += handle.name +
      (i < (names.length - 2) ? ', ' : 
        (i === (names.length - 2) ? ' & ' : ''));
  }
  return answer
}

// Two: Valid Braces
function validBraces(braces){

  let comparison = []
  let matching
  let open = ['(', '{', '[']
  let closed = [')', '}', ']']
  
  for (let i=0; i < braces.length; i++){
    let position = braces[i]
    
    if (closed.indexOf(position) > -1){
      matching = open[closed.indexOf(position)]
      if (comparison.lengeth == 0 || (comparison.pop() != matching)){
      return false
      }
    } else {
    comparison.push(position)}
    
    }
    return (comparison.length == 0)
  }