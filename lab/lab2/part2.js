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
===================== */

var testArray1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var EmptyArray = [];

_.each(testArray1, function(value){
    if (value % 3 === 0 && value % 5 === 0) {
      EmptyArray.push("FizzBuzz");
    } else if (value % 3 === 0) {
      EmptyArray.push("Fizz");
    } else if (value % 5 === 0){
      EmptyArray.push("Buzz");
    }
    else {
      EmptyArray.push(value);
    }
  }
);

console.log(EmptyArray);
//WHERE I WAS

var testArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var EmptyArray2 = [];
var FBFunc = function (testArray, newArray){
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
};

FBFunc(testArray2,EmptyArray2);
console.log(EmptyArray2);

/*
var masterArray = [];
var FizzBuzz1 = function (array) {}
  for (var i=1; i<101; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
      masterArray.push("FizzBuzz");
    } else if (i % 5 == 0) {
      masterArray.push("Buzz");
    } else if (i % 3 == 0) {
      masterArray.push("Fizz");
    } else {
    masterArray.push(i);
    }
  }
};
*/
