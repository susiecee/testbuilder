/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.

let FILL_ME_IN, prefixesMaestro, should;
should = chai.should();  
FILL_ME_IN = 'Fill this value in';

 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
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

  // var assert = function(isTrue){
  //   if (!isTrue) {
  //     throw new Error ('Test failed');
  //   }
  // }; 
  // Be careful, tests can have bugs too...

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
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
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

describe('should support China UnionPay');
describe('should support Switch');