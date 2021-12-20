"use strict";

let myRegExp = /^(\d{4}|\d{6})$/;

console.log(myRegExp.test("1234"));
// true
console.log(myRegExp.test("45135"));
// false
console.log(myRegExp.test("89abc1"));
// false
console.log(myRegExp.test("900876"));
// true
console.log(myRegExp.test(" 4983"));
// false
