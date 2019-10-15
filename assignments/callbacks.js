// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const getLength = (arr, cb) => cb(arr.length);
// getLength passes the length of the array into the callback.

getLength(items, function(len) {
  console.log("1) a.", len);
});

console.log("1) b.", getLength(items, len => len));

const last = (arr, cb) => cb(arr[arr.length - 1]);
// last passes the last item of the array into the callback.

last(items, function(last) {
  console.log("2) a.", last);
});

console.log("2) b.", last(items, last => last));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

sumNums(5, 6, function(x, y) {
  console.log("3) a.", x + y);
});

console.log("3) b.", sumNums(5, 6, (x, y) => x + y));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

multiplyNums(4, 3, function(x, y) {
  console.log("4) a.", x * y);
});

console.log("4) b.", multiplyNums(4, 3, (x, y) => x * y));

const contains = (item, list, cb) => cb(items.includes(item));
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
contains("Gum", items, function(bool) {
  if (bool == true) {
    console.log("Item IS in the array.");
  } else {
    console.log("Item is NOT in the array.");
  }
});

/* STRETCH PROBLEM */
const list = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const removeDuplicates = (arr, cb) => cb(arr);
// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

console.log(
  "Callback stretch goal:",
  removeDuplicates(list, arr =>
    list.filter((value, index) => list.indexOf(value) === index)
  )
);
