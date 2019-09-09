// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function kitchen() {

    let chef = "Chef Fred";
    console.log(`I am ${chef}! Give 10 salmon, on the fly!!`);
 
    
    function sauteeLine(lineCooks) {
    
      const sousChef = "Chef Nancy";
      console.log(`${chef} demands more salmon from ${sousChef}`);
    
  
      function prepLine() {
        const busboy = "busboy Ben";
        console.log(`${busboy} has a message for you! ${sousChef} says revolt againt ${chef}!`);
      
      }
      prepLine();
      
    }
    
    sauteeLine();
  }
  
  kitchen();




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  let count = 0;
  function counter() {
   for (let i = 0; i > 5; i++) {
      counter.push()
   }
   return count;
  }
  
  counter();
};
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
