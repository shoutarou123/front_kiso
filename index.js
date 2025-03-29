document.querySelector("button").addEventListener("click", function () {
  let random = Math.random();
  document.getElementById("random").textContent = random;
});