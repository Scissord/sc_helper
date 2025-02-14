// пример анимации
const box = document.querySelector('.box');
let position = 0;

function animate() {
  position += 1;
  box.style.transform = `translateY(${position}px)`;
  if (position < 1000) requestAnimationFrame(animate);
}

animate();

// получение координат
const element = document.querySelector(".box");
const rect = element.getBoundingClientRect();
// console.log(rect.x, rect.y);

// отслеживание позиции курсора относительно окна
// document.addEventListener("mousemove", (event) => {
//   console.log("Координаты курсора:", event.clientX, event.clientY);
// });

box.addEventListener("mouseenter", () => {
  box.style.background = "blue";
});

box.addEventListener("mouseleave", () => {
  box.style.background = "red";
});

const ball = document.querySelector(".ball");

document.addEventListener("mousemove", (event) => {
  ball.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});