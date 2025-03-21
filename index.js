const  date = () => {
  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleString();
};
date();