// Quick Sort
export default async function quickSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    async function partition(arr, low, high) {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          updateArray([...arr]);
          await delay(50);
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      updateArray([...arr]);
      await delay(50);
      return i + 1;
    }
  
    async function sort(arr, low, high) {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await sort(arr, low, pi - 1);
        await sort(arr, pi + 1, high);
      }
    }
  
    await sort(array, 0, array.length - 1);
  }