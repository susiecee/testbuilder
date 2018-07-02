let FILL_ME_IN, prefixesMaestro, should;
should = chai.should();  
FILL_ME_IN = 'Fill this value in';

 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  it('Throws an error when expected behavior does not match actual behavior', function() {
    let even = function(num){
      return num/2 === 0;
    }

    if(even(10) == true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
   detectNetwork('38345678901234').should.equal('Diner\'s Club')
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901231').should.equal('Diner\'s Club')
    });
});

describe('American Express', function() {
  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012340').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  it('has a prefix of 4 and a length of 13', function() {
   detectNetwork('4123456789012').should.equal('Visa');
  });
  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });
  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011567890123456').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function (){
    detectNetwork('6011567890123456789').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6511567890123456').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function (){
    detectNetwork('6511567890123456789').should.equal('Discover');
  });
 
  for (let prefix = 644; prefix <= 649; prefix++) {
    (function(prefix){
                 
        it ('has a prefix of '+ prefix + ' and a length of 16',function (){ 
        detectNetwork( prefix + '5678912568767').should.equal('Discover')
        });  
        it ('has a prefix of '+ prefix + ' and a length of 19', function (){ 
        detectNetwork(prefix +'4567891256876878').should.equal('Discover')
        });
      })(prefix); 
    }
});

describe('Maestro', function() {
  prefixMaestro = ['5018','5020','5038','6304'];
    
  for (let length = 12; length <= 19; length++) { 
    for (let prefix = 0; prefix < prefixMaestro.length; prefix++){
    (function(length, prefix){
      it ('has a prefix of ' + prefixMaestro[prefix]+ ' and a length of ' +length, function(){
        detectNetwork(prefixMaestro[prefix].padEnd(length,'0')).should.equal('Maestro')
      }); 
      })(length, prefix);
    }
  }
}); 

describe('China UnionPay', function(){
  var prefixArray =       
  [
      ['622126','622925'], 
      ['624','626'],
      ['6282','6288']
    ]; 

    //Loop through the ranges of lenghts 
    for (let length = 16; length <=19; length++) {
      //loop through the prefixArray >> each set of ranges to check for 
     for (let i = 0; i < prefixArray.length; i++) {
       //loops through the ranges 
       for (let ranges = prefixArray[i][0]; ranges <= prefixArray[i][1]; ranges++) {
         (function(length, ranges){ 
            let rangeToString = ranges.toString(); 

            //console.log(rangeToString.padEnd(length, '0')); 
            it ('has a prefix of ' + ranges + ' and a lenght of ' + length, function() {
              detectNetwork(rangeToString.padEnd(length, '0')).should.equal('China UnionPay'); 
          }); 
        })(length,ranges);
      }
    }
  }
});