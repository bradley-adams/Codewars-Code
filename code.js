// One: Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  let answer = ''

  for (i = 0; i < names.length; i++) {
    var handle = names[i];
    answer += handle.name +
      (i < (names.length - 2) ? ', ' :
        (i === (names.length - 2) ? ' & ' : ''));
  }
  return answer
}

// Two: Valid Braces
function validBraces(braces) {

  let comparison = []
  let matching
  let open = ['(', '{', '[']
  let closed = [')', '}', ']']

  for (let i = 0; i < braces.length; i++) {
    let position = braces[i]

    if (closed.indexOf(position) > -1) {
      matching = open[closed.indexOf(position)]
      if (comparison.lengeth == 0 || (comparison.pop() != matching)) {
        return false
      }
    } else {
      comparison.push(position)
    }

  }
  return (comparison.length == 0)
}

// Three: Printer Errors
function printerError(s) {
  s.split(' ')
  let bl = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let count = 0
  let slength = s.length
  let bllength = bl.length
  for (let i = 0; i < slength; i++) {
    for (let j = 0; j < bllength; j++) {
      if (s[i] === bl[j]) {
        count++
      }
    }
  }
  return count + '/' + slength
}


// Four: Disemvowel Trolls
function disemvowel(str) {
  return str = str.replace(/a|e|i|o|u/gi, "")
}

function disemvowel(str) {
  str.split(' ')
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let slength = str.length
  let vlength = vowels.length
  console.log(str)
  for (let i = 0; i < slength; i++) {
    for (let j = 0; j < vlength; j++) {
      if (str[i] == vowels[j]) {
        delete str[i]
      }
    }
  }
}

// Five: WeIrD StRiNg CaSe (Genius but not mine. Harrison in on this)
const toWeirdCase = string => string.split(' ').map(word => word.split('').map((char, i) => i % 2 == 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ')

//Six: Detect Pangram
//6 looping
function isPangram(string) {
  let str = string.toLowerCase()
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let count = 0
  let slength = str.length
  let alphalength = alpha.length
  for (let i = 0; i < slength; i++) {
    for (let j = 0; j < alphalength; j++) {
      if (str[i] === alpha[j]) {
        alpha.splice(j, 1) && count++
      }
    }
  }
  if (count == 26) {
    return true
  } else return false
}

  //6 filter/find
