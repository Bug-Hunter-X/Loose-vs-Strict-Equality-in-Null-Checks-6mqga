function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null));// Output:0

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null values
  }
  return a + b;
}
console.log(bar(1, 2)); // Output: 3
console.log(bar(null, 2)); // Output: 0
console.log(bar(1, null)); // Output: 0
console.log(bar(null, null));// Output: 0

//The difference between foo and bar functions is the use of strict equality (===) vs loose equality (==) when checking for null values. 
//In JavaScript, == performs type coercion before comparison, while === does not.
//When using loose equality(==), a value of 0 will be equal to null due to type coercion. This can lead to unexpected behavior, especially when you expect strict null checks.
//Therefore, when checking for null values, it's recommended to use strict equality (===) to avoid potential errors arising from type coercion.