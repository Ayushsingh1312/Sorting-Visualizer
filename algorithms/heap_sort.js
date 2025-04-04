// Heap Sort
export default async function heapSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    async function heapify(arr, n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        updateArray([...arr]);
        await delay(50);
        await heapify(arr, n, largest);
      }
    }
  
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
      await heapify(array, array.length, i);
    }
  
    for (let i = array.length - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      updateArray([...array]);
      await delay(50);
      await heapify(array, i, 0);
    }
  }