/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});

underscore notation for a loop that lists a number for every element of an Array:
_each(restaurants, function(value)){
console.log(value);
}

For Week 3, Lab 2, are we being asked to rewrite two entire previous labs, or merely parts of previous labs? Or did you mean just two loops?
By that I mean, need we rewrite the entire Week 2 Lab 1, or is just Lab 1 Part 2-Fizzbuzz accepable?


===================== */

//Week 1 Lab 2- FizzBuzz Loop
var testArray1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var FBFunc = function (testArray){
  var newArray = [];
  _.each(testArray, function(value){
    if (value % 3 === 0 && value % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (value % 3 === 0) {
      newArray.push("Fizz");
    } else if (value % 5 === 0){
      newArray.push("Buzz");
    }
    else {
      newArray.push(value);
    }
  });
  return newArray;
};

console.log(FBFunc(testArray1));

//Week 3 Lab 2- FIlter Less than 10 Loop
var testArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var filterOutLessThan10 = function (testArray){
  var over10list = [];
  _.each(testArray,function(value){
    if (value >10){
      over10list.push(value);
    }
  });
  return over10list;
};

console.log(filterOutLessThan10(testArray2));
