export function bubbleSortNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // have to use these ! operators because of the strict null checks
      if (arr[j]! > arr[j + 1]!) {
        const temp = arr[j]!;
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp;
      }
    }
  }
}
