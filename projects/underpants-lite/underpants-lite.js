// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/
    
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
    _.typeOf = function(value) {
    // YOUR CODE BELOW HERE //
    if (typeof(value) === 'string') {
        return 'string';
    } else if (typeof(value) === 'boolean') {
        return 'boolean';
    } else if (typeof(value) === 'number') {
        return 'number';
    } else if (typeof(value) === 'undefined') {
        return 'undefined';
    } else if (typeof(value) === 'function') {
        return 'function';
    } else if (typeof(value) === 'object') {
        if (value === null) {
            return 'null';
        } else if (value instanceof Date === true) {
            return 'date';
        } else if (Array.isArray(value) === true) {
            return 'array';
        } else return 'object';
    }
    // YOUR CODE ABOVE HERE //
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    var a =[];
    if(_.typeOf(array) !== 'array' || number < -1){
        return [];
    }
    if(_.typeOf(number) !== 'number' || number === undefined){
        return array[0];
    }
    for(var i = 0; i < number; i++){
        if(_.typeOf(array[i]) !== 'undefined'){
        a.push(array[i]);    
    }
    }
    return a;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array,number){
    var a =[];
    if(_.typeOf(array) !== 'array' || number <= -1){
        return [];
    }
    if(_.typeOf(number) !== 'number' || number === undefined){
        return array[array.length - 1];
    }if(array.length < number){
        return array;
    }
    for(var i = array.length-1; i >= array.length-number; i--){
        a.unshift(array[i]);    
    }
    return a;
    
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array,value){
    for(var i =0; i < array.length -1; i++){
        if(array[i] === value){
            return i
        }
    }
    
return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array,value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return true
        }
    }
    return false
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection,func){
    if(_.typeOf(collection) === 'array'){
        var tlength = collection.length;
        for(var i=0; i < tlength; i++){
            func(collection[i],i,collection );
        }
    }else if(_.typeOf(collection) === 'object'){
        for(var x in collection){
            func(collection[x], x, collection);
        }
    } 

}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    var funk = [];
    for(var i=0; i < array.length; i++){
        var test = func(array[i], i, array);
        if(test === true){
        funk.push(array[i]);
    }
    } return funk;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection,func){
    var fonk = [];
     if(_.typeOf(collection) === 'array'){
        var tlength = collection.length;
        for(var i=0; i < tlength; i++){
            fonk.push(func(collection[i],i,collection));
        }
    }else if(_.typeOf(collection) === 'object'){
        for(var x in collection){
            fonk.push(func(collection[x], x, collection));
        }
    } return fonk;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject= function(array, func){
        var funk = [];
    for(var i=0; i < array.length; i++){
        var test = func(array[i], i, array);
        if(test === false){
        funk.push(array[i]);
    }
    } return funk;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
        var fronk = [];
        var funky = [];
        var end = [];
        for(var i=0; i < array.length; i++){
            var test = func(array[i],i,array);
            if(test === true){
                fronk.push(array[i]);
            } else if(test === false){
                funky.push(array[i]);
            }
        }
        end.push(fronk);
        end.push(funky);
        return end;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every=function(collection, func){ 
    if(func === undefined){
func = function(value, i, arr){
return value;
}
}
var a=true;
function b(value, i, arr){
    if(!func(value, i, arr)){
        a = false
    }
};    

        _.each(collection, b)
    return a
        
    } ;
    //non-_.each answer
    // if(func === undefined){
    //     for(var i=0; i < collection.length; i++){
    //         if(collection[i] === false){
    //             return false;
    //         }
    //     }return true;
    // }
    // if(_.typeOf(collection) === 'array'){
    //     for(var i=0; i < collection.length; i++){
    //         var a =func(collection[i],i,collection );
            
    //         if(a === false){
    //             return false;
    //         }
            
    //     } return true;
    // }else if(_.typeOf(collection) === 'object'){
    //     for(var x in collection){
    //         var b  = func(collection[x],x,collection );
    //         if(b === false){
    //             return false;
    //         } 
            
    //         }return true;
    //     }
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some= function(collection, func){
    if(func === undefined){
        for(var i=0; i < collection.length; i++){
            if(collection[i] === true){
                return true;
            }
        }return false;
    }
    if(_.typeOf(collection) === 'array'){
        for(var i=0; i < collection.length; i++){
            var a =func(collection[i],i,collection );
            
            if(a === true){
                return true;
            }
            
        } return false;
    }else if(_.typeOf(collection) === 'object'){
        for(var x in collection){
            var b  = func(collection[x],x,collection );
            if(b === true){
                return true;
            } 
            
            }return false;
        }
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property){
    var fronky=[];
    for(var i =0; i < array.length; i++){
            if(_.typeOf(array[i]) === 'object'){
                for(var x in array[i]){
                    if(x === property)
                    fronky.push(array[i][x]);
                }
            }
        }
    return fronky
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
