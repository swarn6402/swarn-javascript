// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//console.log("2" > 1);
//console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. 
// That's why (null >= 0) is true whereas, (null > 0) is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (checks not only the values, but also the datatype. then returns true or false)
// console.log("2" == 2) returns true, but triple equal returns false.

console.log("2" === 2);

// https://262.ecma-international.org/5.1/#sec-11.4.3




