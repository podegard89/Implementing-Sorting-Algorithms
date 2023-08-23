export function heapSort(arr: number[]) {
  let len = arr.length;
  buildMaxHeap(arr, len);
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0, len);
  }
}

export function buildMaxHeap(arr: number[], len: number) {
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }
}

export function heapify(arr: number[], i: number, len: number) {
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}

export function swap(arr: number[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
