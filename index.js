let count = 0;

document.querySelector("button").addEventListener("click", function () {
  count++;
  document.getElementById("countUp").textContent = count;
});
