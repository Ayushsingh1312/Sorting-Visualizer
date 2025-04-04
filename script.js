document.addEventListener("DOMContentLoaded", () => {
    const visualizer = document.getElementById("visualizer");
    const generateArrayBtn = document.getElementById("generateArray");
    const startSortBtn = document.getElementById("startSort");
    const algorithmSelect = document.getElementById("algorithm");
  
    let array = [];
  
    function generateArray() {
      array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
      renderArray();
    }
  
    function renderArray() {
      visualizer.innerHTML = "";
      array.forEach((value) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.width = `${100 / array.length}%`;
        visualizer.appendChild(bar);
      });
    }
  
    async function startSort() {
        const algorithm = algorithmSelect.value;
        if (!array.length) return;
      
        try {
          const sortingFunction = await import(`./algorithms/${algorithm}.js`);
          await sortingFunction.default(array, updateArray);
        } catch (error) {
          console.error("Error importing algorithm:", error);
        }
      }
      
  
    function updateArray(newArray) {
      array = newArray;
      renderArray();
    }
  
    generateArrayBtn.addEventListener("click", generateArray);
    startSortBtn.addEventListener("click", startSort);
  
    generateArray();
  });
  