// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers.

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

function myValues(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log("Q1a x or y is not a number");
  } else {
    console.log("Q1a: x and y are numbers");
  }
  let exponentResult = 1;
  let values = 1;
  for (let i = 0; i < y; i++) {
    exponentResult *= x;
    values += console.log("Q1b:", exponentResult);
  }
}
console.log(
  "-----------------------------------------------------------------------"
);
myValues(3, 5);

console.log(
  "-----------------------------------------------------------------------"
);
function myValues1(x, y) {
  let exponentResult1 = 1;
  let values = 1;
  for (let i = 0; i < y; i++) {
    exponentResult1 *= x;
    values += console.log("Q1c", exponentResult1);
  }
}

myValues1(2, 8);

console.log(
  "-----------------------------------------------------------------------"
);

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable called `fruit` outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".

let fruit = "cherry";

function myFavoriteFruit() {
  let fruit = "mango";
  console.log("Q2:My favorite fruit is", fruit);
}

myFavoriteFruit();

console.log(
  "-----------------------------------------------------------------------"
);

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

const exponent = (nr1, nr2) => {
  for (let i = 1; i <= nr2; i++) {
    let result = Math.pow(nr1, i);
    console.log(`Q3: ${nr1} ${i} is ${result}`);
  }
};

exponent(3, 6);
