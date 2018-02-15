// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);// execute callback
//     }
//   }
// }

// function actionWhenFound(arr) {
//     console.log("Found Waldo at index " + arr + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



function actionWhenFound(element,index,array) {
  if (array[index] === "Waldo") {
    console.log("Found Waldo at index " + index + '!');
  }
}

["Alice", "Bob", "Waldo", "Winston"].forEach(actionWhenFound);