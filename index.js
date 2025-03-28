document.addEventListener("DOMContentLoaded", () => {
  const elements = ['要素１', '要素２', '要素３'];
  const result = document.getElementById("result");

  elements.forEach((elements, index) => {
    setTimeout(() => {
      result.textContent = elements;
    }, index * 1000);
  });
});