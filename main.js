// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

console.log('Linked');

function max(a, b){
    "use strict";
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.assert( max(2,3) === 3, 'max');
console.assert( max(3,2) === 3, 'max');
console.assert( max(3,3) === 3, 'max');

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.assert( maxOfThree(1, 2, 3) === 3, 'maxOfThree');
console.assert( maxOfThree(3, 2, 1) === 3, 'maxOfThree');
console.assert( maxOfThree(1, 3, 2) === 3, 'maxOfThree');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    switch(char) {
        case 'a':
            return true;
            break;
        case 'e':
            return true;
            break;
        case 'i':
            return true;
            break;
        case 'o':
            return true;
            break;
        case 'u':
            return true;
            break;
        default:
            return false;
    }
}

console.assert( isVowel('a') === true, 'isVowel');
console.assert( isVowel('b') === false, 'isVowel');
console.assert( isVowel('o') === true, 'isVowel');
console.assert( isVowel('t') === false, 'isVowel');

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var result = '';
    for (var i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) != 'a' && phrase.charAt(i) != 'e' && phrase.charAt(i) != 'i' && phrase.charAt(i) != 'o' && phrase.charAt(i) != 'u' && phrase.charAt(i) != ' ') {
            result += phrase.charAt(i) + 'o' + phrase.charAt(i);
        } else {
            result += phrase.charAt(i);
        }
    }
    return result;
}

console.assert( rovarspraket('this is fun') === 'tothohisos isos fofunon', 'rovarspraket');
console.assert( rovarspraket('hello') === 'hohelollolo', 'rovarspraket');
console.assert( rovarspraket('matt') === 'momatottot', 'rovarspraket');

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var total = array.reduce(function(a, b) {
        return a+=b;
    });
    return total;
}

console.assert( sum([1,2,3,4]) === 10, 'sum');

function multiply(array){
    "use strict";
    var total = array.reduce(function(a,b) {
        return a*=b;
    });
    return total;
}

console.assert( multiply([1,2,3,4]) === 24, 'multiply');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    var result = ''
    for (var i = string.length-1; i >= 0; i--) {
        result += string.charAt(i);
    }
    return result;
}

console.assert( reverse('jag testar') === 'ratset gaj', 'reverse');
console.assert( reverse('matt') === 'ttam', 'reverse');
console.assert( reverse('balogna') === 'angolab', 'reverse');

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var longest = '';
    for (var i = 0; i < words.length; i++) {
        if (i+1 === words.length) {
            break;
        }
        longest = words[i].length > words[i+1].length ? words[i] : words[i+1];
    }
    return longest;
}

console.assert( findLongestWord(['word', 'longer', 'longest']) === 'longest', 'findLongestWord');

//Same as above with reduce instead

function findLongest(words) {
    'use strict'
    var longest = words.reduce(function(a, b) {
        return a.length > b.length ? a : b;
    });
    return longest;
}

console.assert( findLongest(['word', 'longer', 'longest']) === 'longest', 'findLongest');

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var resultArray = [];
    for (var j = 0; j < words.length; j++) {
        words[j].length > i ? resultArray.push(words[j]) : false;
    }
    return resultArray;
}

function arraysEqual(a, b) {
    if (a.length != b.length) {
        return areEqual = false;
    }
    var areEqual = true;
    a.forEach(function(item, i) {
        if (item != b[i]) {
            areEqual =  false;
        }
    });
    return areEqual;
}

console.assert( arraysEqual(filterLongWords(['matt', 'erin', 'coda', 'matthew', 'david', 'chastain'],4), ['matthew', 'david', 'chastain']), 'filterLongWords');
console.assert( arraysEqual(filterLongWords(['word', 'words', 'wordier', 'verbose'], 5), ['wordier', 'verbose']), 'filterLongWords');

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var characterCountObject = {};
    for (var i = 0; i < string.length; i++) {
        if (characterCountObject.hasOwnProperty(string.charAt(i))) {
            characterCountObject[string.charAt(i)]++;
        } else {
            characterCountObject[string.charAt(i)] = 1;
        }
    }
    return characterCountObject;
}

function objectsEqual(a, b) {
    var areEqual = true;
    if (objectSize(a) != objectSize(b)) {
        return areEqual = false;
    }
    for (var key in a) {
        if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
            if (a[key] != b[key]) {
                return areEqual = false;
            }
        } else {
            return areEqual = false;
        }
    }
    return areEqual;
}

function objectSize(object) {
    var size = 0;
    for (var key in object) {
        if (object.hasOwnProperty) {
            size++;
        }
    }
    return size;
}

var x = {'a': 1, 'b': 2, 'c': 3};
var y = {'a': 1, 'b': 2, 'c': 3};

objectsEqual(x,y);

console.assert( objectsEqual(charFreq('abbabcbdbabdbdbabababcbcbab'), {'a': 7, 'b': 14, 'c': 3, 'd': 3}), 'charFreq');