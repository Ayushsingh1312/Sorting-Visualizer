// Radix Sort
export default async function radixSort(array, updateArray) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    const getMax = (arr) => Math.max(...arr);
  
    async function countingSort(arr, exp) {
      const output = new Array(arr.length).fill(0);
      const count = new Array(10).fill(0);
  
      arr.forEach((num) => {
        count[Math.floor(num / exp) % 10]++;
      });
  
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[--count[digit]] = arr[i];
      }
  
      for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        updateArray([...arr]);
        await delay(50);
      }
    }
  
    const max = getMax(array);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      await countingSort(array, exp);
    }
  }