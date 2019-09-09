// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  cb(arr)
  // getLength passes the length of the array into the callback.
}

function cb(arr) {
 let itemsLength = arr.length;
 console.log(itemsLength);                      
};

getLength(items, cb)

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr)
}

function cb(arr) {
  let lastItem = items[items.length-1];
  console.log(lastItem)
}

last(items, cb)


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x,y)
}

function cb(x, y) {
  let sum = x + y;
  console.log(sum);
}

sumNums(3, 4, cb)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x,y)
}

function cb(x, y) {
  let result = x * y;
  console.log(result);
}

multiplyNums(5, 5, cb)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(item, list)
}

function cb(item, list) {
  if (item === list[i]) {
    return true;
  } else {
    return false;
  }
}

contains(gum, items)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
