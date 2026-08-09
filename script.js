const input = document.getElementById("input");
const output = document.getElementById("output");
const sortOrder = document.getElementById("sortOrder");
const sortButton = document.getElementById("sortButton");
const copyButton = document.getElementById("copyButton");
const clearButton = document.getElementById("clearButton");

sortButton.addEventListener("click", function () {
  const lines = input.value.split("\n");

  if (sortOrder.value === "az") {
    lines.sort((a, b) => a.localeCompare(b));
  } else {
    lines.sort((a, b) => b.localeCompare(a));
  }

  output.value = lines.join("\n");
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
});

clearButton.addEventListener("click", function () {
  input.value = "";
  output.value = "";
});
