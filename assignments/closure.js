// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const thing = value => {
  let stuff = "a sentance";
  return function() {
    console.log(`1) I want to write ${stuff}`);
  };
};

const result = thing();
result();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = value => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 1;
  return function() {
    return count++;
  };
};
const newCounter = counter();
console.log("Closure stretch goal: 1) a.", newCounter()); // 1
console.log("Closure stretch goal: 1) b.", newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (value, num) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let i = num;
  const plusOrMinus = {
    increment: function() {
      return i + 1;
    },
    decrement: function() {
      return i - 1;
    }
  };
  if (value === "inc") {
    return plusOrMinus.increment();
  } else if (value === "dec") {
    return plusOrMinus.decrement();
  }
};
console.log("Closure stretch goal: 2) a.", counterFactory("inc", 4));
console.log("Closure stretch goal: 2) b.", counterFactory("dec", 4));
