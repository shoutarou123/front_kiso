function showSelected() {
  const radios = document.getElementsByName('color');
  let selectedColor = '';

  radios.forEach(radio => {
    if (radio.checked) {
      selectedColor = radio.value;
    }
  });

  const result = document.getElementById('result');
  if (selectedColor) {
    result.textContent = `色は「${selectedColor}」です。`;
  } else {
    result.textContent = '選択されていません。';
  }
}
