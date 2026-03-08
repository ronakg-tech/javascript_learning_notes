// # JavaScript Variables Practice with Output

// ### Example 1

// // var name ="ronak";
// // console.log(name);


// ✅ Output


// ronak


// ### Example 2

// // var age = 22;
// // var age = 23;
// // console.log(age);


// ✅ Output

// 23


// Explanation: `var` allows re-declaration, so the second value overwrites the first.



// ### Example 3

// javascript
// // var oldage = 24;
// // oldage =25;
// // console.log(oldage);


// ✅ Output


// 25


// Explanation: `var` variables can be updated.



// ### Example 4

// // let name ="ronak";
// // console.log(name);


// ✅ Output
// ronak


// ### Example 5


// // let name="ronak";
// // name ="ronak";
// // console.log(name);


// ✅ Output
// ronak


// Explanation: `let` cannot be redeclared, but it can be updated.

// ### Example 6


// // let age =22;
// // age = 23;
// // console.log(age);


// ✅ Output


// 23

// ### Example 7

// // const city ;
// // city="bhopal";
// // console.log(city);


// ❌ Output


// SyntaxError: Missing initializer in const declaration
// Explanation: `const` must be initialized at the time of declaration.


// ### Example 8

// javascript
// // const city ="gwalior";
// // console.log(city);


// ✅ Output
// gwalior


// ### Example 9

// // let price = 100;
// // const quantity = 3;
// // let total = price * quantity;
// // console.log(total);


// ✅ Output
// 300


// ### Example 10

// // var a = 10;

// // {
// //     var a = 20;
// // }

// // console.log(a);


// ✅ Output
// 20


// Explanation: `var` is function scoped, not block scoped.

// ### Example 11

// // let a = 10;

// // {
// //     let a = 20;
// // }

// // console.log(a);


// ✅ Output
// 10


// Explanation: `let` is block scoped, so the inner `a` does not affect the outer one.

// ### Example 12

// // let x;
// // console.log(x);


// ✅ Output
// undefined


// Explanation: Variable declared but **not assigned a value**.


// ### Example 13


// // let a = 10;
// // let b;

// // b = a;

// // console.log(b);


// ✅ Output
// 10


// ### Example 14

// javascript
// // let a = 5;
// // let b = a;

// // a = 20;

// // console.log(b);


// ✅ Output
// 5


// Explanation: `b` stored the value of `a` before it changed.

// ### Example 15

// // const x = 10;

// // {
// //    const x = 20;
// //    console.log(x);
// // }

// // console.log(x);


// ✅ Output
// 20
// 10


// Explanation: `const` is block scoped, so both variables are different.
