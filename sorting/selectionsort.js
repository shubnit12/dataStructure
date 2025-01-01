function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
// console.log(selectionSort([4, 5, 2, 21, 2, 5, 6]));

let array = [];
for (let i = 0; i < 100000; i++) {
  array.push(Math.floor(Math.random() * 100000000));
}
const time1 = new Date();
console.log(selectionSort(array));
const time2 = new Date();
console.log("selectionSort Time", time2 - time1);
