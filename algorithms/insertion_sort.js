// Insertion Sort
export default async function insertionSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
        updateArray([...array]);
        await delay(50);
      }
      array[j + 1] = key;
      updateArray([...array]);
    }
  }