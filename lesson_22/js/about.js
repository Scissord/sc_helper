document.addEventListener("DOMContentLoaded", () => {
  const cardItems = document.querySelectorAll(".about-card-item");
  const descriptions = document.querySelectorAll(".about-description");

  cardItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Убираем активный класс у всех карточек
      cardItems.forEach((card) => card.classList.remove("active"));

      // Добавляем активный класс текущей карточке
      item.classList.add("active");

      // Скрываем все описания
      descriptions.forEach((desc) => (desc.style.display = "none"));

      // Показываем описание для активной карточки
      const targetId = item.getAttribute("data-description");
      const targetDescription = document.getElementById(targetId);
      if (targetDescription) {
        targetDescription.style.display = "flex";
      }
    });
  });
});
