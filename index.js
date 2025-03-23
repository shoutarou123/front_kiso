document.getElementById('hoge') .addEventListener('mouseenter', function() {
  this.style.color = 'red';
});
document.getElementById('hoge') .addEventListener('mouseleave', function() {
  this.style.color = '';
});