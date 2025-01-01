function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let array = [];
for (let i = 0; i < 100000; i++) {
  array.push(Math.floor(Math.random() * 100000000));
}
const time1 = new Date();
console.log(bubbleSort(array));
const time2 = new Date();
console.log("bubbleSort Time", time2 - time1);
