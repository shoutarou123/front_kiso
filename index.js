const changeTextButton = document.getElementById('changeTextButton');
const textToChange = document.getElementById('textToChange');

changeTextButton.addEventListener('click', function() {
  textToChange.textContent = 'テキストが変更されました。';
})
