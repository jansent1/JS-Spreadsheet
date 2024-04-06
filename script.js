// Function to generate a rang of numbers:
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

// The global window object represents the browser window (or tab)
window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    // Create a new label div HTML Element:
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };
};
