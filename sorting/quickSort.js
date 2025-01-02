function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);

  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;

  let pivotIndex = pivot(array, left, right);
  quickSort(array, left, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, right);
  return array;
}

// function test() {
let myArray = [4, 6, 1, 7, 3, 2, 5];
//   quickSort(myArray);
//   console.log(myArray);
// }

// test();
let array = [];
for (let i = 0; i < 100000; i++) {
  array.push(Math.floor(Math.random() * 100000000));
}
const time1 = new Date();
console.log(quickSort(array));
const time2 = new Date();
console.log("quickSort Time", time2 - time1);


