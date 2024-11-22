document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function updateActiveItem(newIndex) {
    items[currentIndex].classList.remove("active");
    items[newIndex].classList.add("active");
    currentIndex = newIndex;
  }

  function showNextItem() {
    const nextIndex = (currentIndex + 1) % items.length;
    updateActiveItem(nextIndex);
  }

  function showPrevItem() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    updateActiveItem(prevIndex);
  }

  // Кнопки управления
  document.getElementById("nextBtn").addEventListener("click", showNextItem);
  document.getElementById("prevBtn").addEventListener("click", showPrevItem);

  // Автоматическое переключение каждые 3 секунды
  // setInterval(showNextItem, 3000);
});
