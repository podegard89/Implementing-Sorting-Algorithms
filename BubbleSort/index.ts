import {
  bubbleSortAlphabetize,
  bubbleSortNumber,
  bubbleSortObject,
} from "./bubbleSort";

const numberTestArray = [5, 4, 3, 2, 1];

bubbleSortNumber(numberTestArray);

console.log("Sorted numbers: " + numberTestArray);

const stringTestArray1 = ["e", "d", "c", "b", "a"];

bubbleSortAlphabetize(stringTestArray1);

console.log("Sorted letters: " + stringTestArray1);

const stringTestArray2 = ["Pearce", "brendan", "Zach", "Amanda", "Cameron"];

bubbleSortAlphabetize(stringTestArray2);

console.log("Sorted names: " + stringTestArray2);

const objectTestArray = [
  { name: "Pearce" },
  { name: "brendan" },
  { name: "Zach" },
  { name: "Amanda" },
  { name: "Cameron" },
];

bubbleSortObject(
  objectTestArray,
  (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
);

console.log(objectTestArray);
