class Bird {
  fly() {
    console.log("Птица летит.");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Орел парит в небе.");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Пингвины не умеют летать.");
  }
}

const birds = [new Bird(), new Eagle(), new Penguin()];
birds.forEach(bird => bird.fly());
// Птица летит.
// Орел парит в небе.
// Пингвины не умеют летать.
