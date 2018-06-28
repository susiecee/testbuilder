// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
let count = 0; 

  if (cardNumber.length) {
    for (let i = 0; i < cardNumber.length; i++ ) {
      let check = parseInt(cardNumber[i],10);
      //console.log(check);
      // if (typeof check === Number ) 
      if (isNaN(check)) {
        return;
      }
      if (!isNaN(check)) {
        count +=1;
      }
    }
  }


let hasPrefix = function (prefix){
  return cardNumber.startsWith(prefix); 
}
  
  if ((count === 14) && (hasPrefix('38')  || hasPrefix('39'))) {
    return ('Diner\'s Club');
    } 
  if ((count === 15) && (hasPrefix('34')  || hasPrefix('37'))) {
    return ('American Express');
    }
  if ((count ===13 || count === 16 || count === 19) && (hasPrefix('4'))) {
    return ('Visa');
    }
  if ((count === 16) && (hasPrefix('51')  || hasPrefix('52') || hasPrefix('53')|| hasPrefix('54') || hasPrefix('55'))) {
    return ('MasterCard');
    }
  if ((count === 16 || count === 19) && (hasPrefix('6011') || hasPrefix('65'))) {
    return ('Discover');
    }
  if ((count === 12 || count === 13 || count ===14 || count ===15 || count ===16 || count ===17 ||count ===18 || count===19) && (hasPrefix('5018') || hasPrefix('5020') || hasPrefix('5038')|| hasPrefix('6304'))) {
    return ('Maestro');
    }
}

