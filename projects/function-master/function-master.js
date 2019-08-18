//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// i'm done :D
function objectValues(object) {
   var arr = [];
   for (var x in object) {
    arr.push(object[x]);
  }
  return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
  for(var key in object){
    arr.push(key);
  }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
      var values = [];
  for (var x in object) {
      if(typeof(object[x]) === 'string'){
          values.push(object[x]);    
      }

  }
  return values.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if (typeof(collection) === 'object') {
        if (Array.isArray(collection) === true) {
            return 'array';
        } else return 'object';
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
var arr = [];
var yarr = [];
    arr.push(string.slice(0,1));
    yarr.push(string.slice(1));
    return arr[0].toUpperCase() + yarr[0];
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
   var a = string.toLowerCase().split(' ');
   for (var i = 0; i < a.length; i++) {
       a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);     
   }
   return a.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var arr = [];
    var yarr = [];
    arr.push(object.name.slice(0,1));
    yarr.push(object.name.slice(1));
    var a = arr[0].toUpperCase() + yarr[0];

 return "Welcome " + a + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    for(var x in object){
        if (x === 'name'){
            var arr = [];
            var yarr = [];
            arr.push(object[x].slice(0,1));
            yarr.push(object[x].slice(1));
            var a = arr[0].toUpperCase() + yarr[0];
        }
        if( x === 'species'){
            var arr = [];
            var yarr = [];
            arr.push(object[x].slice(0,1));
            yarr.push(object[x].slice(1));
            var b = arr[0].toUpperCase() + yarr[0];
        } 
    }
return a + ' is a ' + b;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises === undefined){
        return "there are no noises"
    } else if(object.noises.length === 0){
        return "there are no noises"
    }
    
    
    return object.noises.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if( string.includes(word)){
    return true;
} else{
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name)
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(object.friends === undefined){
    return false;
}
if(Object.values(object.friends).includes(name)){
    return true;
} else{
    return false;
 }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var jkfsa = [];
    for( var i = 0; i < array.length; i++){
        if(array[i].name === name){
           for(var j = 0; j < array[i].friends.length; j++){
               jkfsa.push(array[i].friends[j])
           }
          jkfsa.push(name)

        }
    }
    //make one more list of everyone in array not in jkfsa and return that
    var ret = [];
    for( var k = 0; k < array.length; k++){
        if(jkfsa.includes(array[k].name) === false ){
            ret.push(array[k].name)
        }
    }
    return ret
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
 object[key] = value;
 return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    if( array.length > 0){
        for(var x in object){
            for(var y = 0; y < array.length; y++){
                if (array[y] === x || array[y] === object[x]) delete object[x];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var a = array.filter(function(elem, index, self){
        return index == self.indexOf(elem);
    });
    return a;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}