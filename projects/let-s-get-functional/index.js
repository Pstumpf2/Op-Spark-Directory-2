// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-pstumpf2");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var a = 0;
    function b(value, index, c){
        if (value.gender === 'male' && value.gender !== undefined){
            return true;
        }
        return false;
    }
    var c = _.filter(array, b) ;
    return c.length;
    
    
}

var femaleCount = function(array) {
    var a = 0;
    _.each(array, function(val, ind, col){
        if(val.gender=== 'female'){
            a++;
        }
    }); 
    return a;
};

var oldestCustomer = function(array) {
    var a = 0;
    var b
    _.each(array, function(val, ind, col){
    if(val.age > a){
    a = val.age;
    b = val.name;
    }    
    });
    return b;
};

var youngestCustomer = function(array) {
    var a = 200;
    var b
    _.each(array, function(val, ind, col){
    if(val.age < a){
    a = val.age;
    b = val.name;
    }    
    });
    return b;    
};

var averageBalance = function(array) {
    var b = [];
    _.each(array, function(val, ind, col){
        var number = Number(val.balance.replace(/[^0-9.-]+/g,""));
        b.push(number);
    });
    const sum = b.reduce(add, 0);
    
    function add(accumulator, a) {
        return accumulator + a;
    }
    
    return sum/b.length
};

var firstLetterCount = function(array, letter) {
    var b = [];
    _.each(array, function(val, ind, col){
    var a = val.name
    if(a[0].toLowerCase() === letter.toLowerCase()){
        b.push(val.name)
    }
    });
    return b.length
};

var friendFirstLetterCount = function(array, customer, letter) {
    var b;
    var a = _.pluck(array, 'name');
    for(var i = 0; i < a.length; i++){
        if(a[i] === customer){
            b = i;
        }
    }
    return firstLetterCount(array[b].friends, letter);
};

var friendsCount = function(array, personName) {
    var a = [];
    for(var i =0; i< array.length;i++){
        for(var j = 0; j < array[i].friends.length;j++){
            if(array[i].friends[j].name === personName){
                a.push(array[i].name);
            }
        }
    for(var j = 0; j < a.length; j++){
        
    }
    }
return a
};

var topThreeTags = function(array) {
    var a =[];
     for(var i = 0; i< array.length; i++){
        for(var j = 0; j< array[i].tags.length; j++){
            a.push(array[i].tags[j]); 
        }
     }
var uniqueCount = a.sort();
var  count = {};
    
    var  num = 0;
    var  num1;
    var  num2;
    var  num3;
    var  topThree = [];
    uniqueCount.forEach(function(l) { count[l] = (count[l]||0) + 1;});
    for(var k in count){
      if (count[k] >= num && num1 === undefined){
        num1 = k;
        num = count[k];
      } else if(count[k] >= num && num2 === undefined){
        num2 = k;
        num = count[k];
      } else if(count[k] >= num && num3 === undefined){
        num3 = k;
        num = count[k];

      }
      
    }
    topThree.push(num1);
    topThree.push(num2);
    topThree.push(num3);
    return topThree
};

var genderCount = function(array) {
var c = {male: 0, female: 0, transgender:0};    
    function gender(a){
     if (a.gender === "male"){
         c.male++ 
     }
     if(a.gender === "female"){
         c.female++ 
     }
     if(a.gender === "transgender"){
         c.transgender++ 
     }
    }
    _.each(array, gender)
    return c
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
