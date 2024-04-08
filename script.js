// Average function:
const average = (nums) => sum(nums) / nums.length;

// is odd or even function:
const isEven = (num) => num % 2 === 0;

// function to calculate the sum:
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);

// Median function:
const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
};

// Spreadsheet functions object:
const spreadsheetFunctions = {
  sum,
  average,
  median,
};

// Function to generate a range of numbers:
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

// Also create a range of letters:
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );

// Parse and evaluate the input String:
const evalFormula = (x, cells) => {
  const idToText = (id) => cells.find((cell) => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
};

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
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      input.onchange = update;
      container.appendChild(input);
    });
  });
};

const update = (event) => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith("=")) {
  }
};
