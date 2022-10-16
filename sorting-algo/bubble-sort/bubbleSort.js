const swap = require("./swap");

function bubbleSort(input) {
  let swapping = true;
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        //log a message for every swap made when we execute bubbleSort()
        console.log(`Swapping pair ${input[i]}, ${input[i + 1]} in [${input}]`);
        swap(input, i, i + 1);
        swapping = true;
      }
    }
  }
  return input;
}

module.exports = bubbleSort;
