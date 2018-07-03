var detectNetwork = function(cardNumber) {

  var count = 0; 
  
  var hasPrefix = function (prefix){
    return cardNumber.startsWith(prefix); 
    //.startsWith takes in a string to use this function you need to convert numbers to strings
    //prefixes does not need to be a string 
  }

  //==============================================================
  var prefixCheck = function(prefixArray, cardNumber) {
    for (let i = 0; i < prefixArray.length; i++) {
      if (hasPrefix(prefixArray[i])){
        return true;
      } 
    }
  } 

  //==============================================================
  var rangePrefixCheck = function (prefixArray , cardNumber) {
    // debugger;
    for (let i = 0; i < prefixArray.length; i++) {
          let numToString =  prefixArray[i][0].toString(); 
          let numToStringB = prefixArray[i][1].toString(); 

          let cardNumPrefix = cardNumber.slice(0, numToString.length); //cardSlice
          //NOTE: when comparing strings using unstrict equality, JS will convert strings to numbers automatically 
          //For good practice, we are using parseInt to convert the string to # with let parseInt
          let integerPrefix = parseInt(cardNumPrefix,10); //iCardSlice
      
          //we need to check for range between 622126 and 622925
        if (integerPrefix >= prefixArray[i][0] && 
        integerPrefix <= prefixArray[i][1]) { 
            return true; 
        }  
   }
   return false; 
}
  
  //==============================================================
  //check length of cardNumber - error handling for non-digits
    if (cardNumber.length) {
      for (let i = 0; i < cardNumber.length; i++ ) {
        let check = parseInt(cardNumber[i],10); 
        if (isNaN(check)) {
          return;
        }
        if (!isNaN(check)) {
          count +=1;
        }
      }
    }
  //==============================================================
    
  if ((count === 14) && 
        (hasPrefix('38')  || hasPrefix('39'))) {
      return 'Diner\'s Club';
      } 
    if ((count === 15) && 
        (hasPrefix('34')  || hasPrefix('37'))) {
      return 'American Express';
      }
    if ((count ===16 || count === 18 || count === 19) && 
      prefixCheck(['4903', '4905', '4911','4936','564182','633110','6333','6759'], cardNumber)) { 
        return 'Switch'; 
      }
    if ((count ===13 || count === 16 || count === 19) && 
        (hasPrefix('4'))) {
      return 'Visa';
      }
    if ((count === 16) && 
      prefixCheck(['51', '52', '53','54','55'], cardNumber)) { 
        return 'MasterCard'; 
      }   
    if ((count === 16 || count === 19) && 
      prefixCheck(['6011', '65', '644','645','646','647','648','649'], cardNumber)) { 
        return 'Discover'; 
      }    
    if ((count >= 12 && count <=19) && 
      prefixCheck(['5018','5020','5038','6304'], cardNumber)) {
        return 'Maestro';
      }
    if (count >=16 && count <=19) {
      var prefixArray =       
      [
        ['622126','622925'], 
        ['624','626'],
        ['6282','6288']
      ]; 
      
      if (rangePrefixCheck(prefixArray, cardNumber)) {
      return 'China UnionPay'; 
      }
    }
  } // function close