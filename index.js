let input = document.getElementById('input');
let span = document.getElementById('inputCounter');
input.addEventListener("keyup", function() {
  span.textContent = input.value.length;
});
