// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
// declared
let counter = 0;

function recursiveFunc() {
  // Base case ( end our recurive call)
  counter++;
  recursiveFunc();
}

//End iteration condition
// Incrementing
// Declared

try {
  recursiveFunc();
} catch (error) {
  //console.error("Stack overflow error caught :)", error);
  console.log("Number of recursive calls before stack overflow :", counter);
}