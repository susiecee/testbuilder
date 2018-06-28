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

let prefix = cardNumber[0] + cardNumber[1];
let fourPre = cardNumber[0] + cardNumber[1] +cardNumber[2]+ cardNumber[3]
  
if ((count === 14) && (prefix === '38'  || prefix === '39')) {
    return ('Diner\'s Club');
    } 
  if ((count === 15) && (prefix === '34'  || prefix === '37')) {
    return ('American Express');
    }
  if ((count ===13 || count === 16 || count === 19) && (cardNumber[0] === '4')) {
    return ('Visa');
    }
  if ((count === 16) && (prefix=== '51'  || prefix=== '52' || prefix=== '53'|| prefix === '54' || prefix === '55')) {
    return ('MasterCard');
    }
  if ((count === 16 || count === 19) && (cardNumber[0]+cardNumber[1]+cardNumber[2]+cardNumber[3]=== '6011' || cardNumber[0]+cardNumber[1]=== '65')) {
    return ('Discover');
    }
  if ((count === 12 || count === 13 || count ===14 || count ===15 || count ===16 || count ===17 ||count ===18 || count===19) && (fourPre=== '5018' || fourPre === '5020' || fourPre === '5038'|| fourPre === '6304')) {
    return ('Maestro');
    }
}

