// let score="33"
// console.log(typeof score);
// console.log(score);
// let inn = Number(score)
// console.log(typeof inn);
// console.log(inn)
// // "33" => 33
// // "33abc" => NaN
// // true => 1; false=>0

// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// 1 => true; 0=>false;
// "" => false
// "string" => true
//let ser=456;
//let numser=String(ser);
//console.log(numser)
//console.log(typeof(numser))
// let gamecounter = 100
// ++gamecounter;
// console.log(gamecounter);
// Increment operator
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
