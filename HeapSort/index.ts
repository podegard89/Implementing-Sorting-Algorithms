import { heapSort } from "./heapSort";

const numberTestArray = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);

console.log("Unsorted numbers: " + numberTestArray);

heapSort(numberTestArray);

console.log("Sorted numbers: " + numberTestArray);
