export default async function bubbleSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          updateArray([...array]);
          await delay(50);
        }
      }
    }
  }
  