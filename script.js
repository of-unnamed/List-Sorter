const input = document.getElementById("input");
const output = document.getElementById("output");
const sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", function () {
  const lines = input.value.split("\n");

  lines.sort((a, b) => a.localeCompare(b));

  output.value = lines.join("\n");
});
