function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

// console.log(merge([3, 5, 6, 8, 9], [1, 2, 3, 5, 7, 8]));

function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}
let array = [];
for (let i = 0; i < 100000; i++) {
  array.push(Math.floor(Math.random() * 100000000));
}
const time1 = new Date();
console.log(mergeSort(array));
const time2 = new Date();
console.log("mergeSort Time", time2 - time1);
