const input = document.getElementById("input");
const output = document.getElementById("output");
const sortButton = document.getElementById("sortButton");
const copyButton = document.getElementById("copyButton");

sortButton.addEventListener("click", function () {
  const lines = input.value.split("\n");

  lines.sort((a, b) => a.localeCompare(b));

  output.value = lines.join("\n");
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
});
