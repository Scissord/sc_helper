class Shape {
  constructor(type) {
    this.type = type;
  }

  calculateArea() {
    throw new Error("Метод должен быть реализован в подклассе");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(`Площадь круга: ${circle.calculateArea()}`); // Площадь круга: 78.53981633974483
