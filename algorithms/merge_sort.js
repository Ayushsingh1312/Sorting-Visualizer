// Merge Sort
export default async function mergeSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    async function merge(arr, start, mid, end) {
      const left = arr.slice(start, mid + 1);
      const right = arr.slice(mid + 1, end + 1);
      let i = 0, j = 0, k = start;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          arr[k++] = left[i++];
        } else {
          arr[k++] = right[j++];
        }
        updateArray([...arr]);
        await delay(50);
      }
  
      while (i < left.length) {
        arr[k++] = left[i++];
        updateArray([...arr]);
        await delay(50);
      }
  
      while (j < right.length) {
        arr[k++] = right[j++];
        updateArray([...arr]);
        await delay(50);
      }
    }
  
    async function divide(arr, start, end) {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await divide(arr, start, mid);
        await divide(arr, mid + 1, end);
        await merge(arr, start, mid, end);
      }
    }
  
    await divide(array, 0, array.length - 1);
  }