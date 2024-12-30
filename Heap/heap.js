console.log("Heap");

class Heap {
  #heap = [];
  getHeap() {
    return [...this.#heap];
  }
  #leftChild(index) {
    return index * 2 + 1;
  }
  #rightChild(index) {
    return index * 2 + 2;
  }
  #parent(index) {
    return Math.floor((index - 1) / 2);
  }
  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }
  sink(index) {
    let size = this.#heap.length;
    let maxIndex = index;
    while (true) {
      let leftChildIndex = this.#leftChild(index);
      let rightChildIndex = this.#rightChild(index);
      if (
        leftChildIndex < size &&
        this.#heap[leftChildIndex] > this.#heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }
      if (
        rightChildIndex < size &&
        this.#heap[rightChildIndex] > this.#heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }
      if (maxIndex !== index) {
        this.#swap(maxIndex, index);
        index = maxIndex;
      } else {
        return;
      }
    }
  }
  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }
  remove() {
    if (this.#heap.length === 0) {
      return null;
    }
    if (this.#heap.length === 1) {
      return this.#heap.pop();
    }
    let maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.sink(0);
    return maxValue;
  }
}

const myHeap = new Heap();
myHeap.insert(95);
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);
console.log(myHeap.getHeap());
myHeap.remove();
console.log(myHeap.getHeap());
myHeap.remove();
console.log(myHeap.getHeap());
