function insertionSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}
let array = [];
for (let i = 0; i < 100000; i++) {
  array.push(Math.floor(Math.random() * 100000000));
}
const time1 = new Date();
console.log(insertionSort(array));
const time2 = new Date();
console.log("insertionSort Time", time2 - time1);
