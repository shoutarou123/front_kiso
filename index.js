function chcekCheckbox() {
  const checkbox = document.getElementById('myCheckbox');
  const result = document.getElementById('result');

  if (checkbox.checked) {
    result.textContent = "チェックされています";
  } else {
    result.textContent = "チェックなしです";
  }
}
