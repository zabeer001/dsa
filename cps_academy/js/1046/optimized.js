class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert element
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] >= this.heap[idx]) break;
      this.swap(parent, idx);
      idx = parent;
    }
  }

  // Extract max element
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }

  bubbleDown(idx) {
    const length = this.heap.length;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let largest = idx;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest === idx) break;

      this.swap(idx, largest);
      idx = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function lastStoneWeight(stones) {
  const heap = new MaxHeap();
  for (const stone of stones) {
    heap.push(stone);
  }

  while (heap.size() > 1) {
    let first = heap.pop();
    let second = heap.pop();
    if (first !== second) {
      heap.push(first - second);
    }
  }

  return heap.size() === 1 ? heap.pop() : 0;
}

// Example:
console.log(lastStoneWeight([2,7,4,1,8,1,1])); // Output: 1
