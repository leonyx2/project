"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
   let num = 10;
   console.log(num);
}

showFirstMessage("Hellow World!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(1, 7));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) =>  a + b;

const calc1 = (a, b) => {
    console.log('1');
    return a + b;
};