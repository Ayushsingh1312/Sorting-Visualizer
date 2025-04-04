// Shell Sort
export default async function shellSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < array.length; i++) {
        const temp = array[i];
        let j;
        for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
          array[j] = array[j - gap];
          updateArray([...array]);
          await delay(50);
        }
        array[j] = temp;
        updateArray([...array]);
      }
    }
  }