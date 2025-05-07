// Функція-конструктор для Animal
function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.speak = function() {
    return `Це ${this.type}`;
  };
  
  // Функція-конструктор для Dog, що "наслідує" Animal
  function Dog(name) {
    Animal.call(this, "собака"); // Виклик конструктора Animal у контексті Dog
    this.name = name;
  }
  
  // Встановлення прототипного зв'язку
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; // Важливо повернути правильний конструктор
  
  // Додавання власного методу для Dog
  Dog.prototype.bark = function() {
    return "Гав-гав!";
  };
  
  const myDog = new Dog("Бобик");
  console.log(myDog.speak()); // Виведе: Це собака
  console.log(myDog.bark());  // Виведе: Гав-гав!
  console.log(myDog instanceof Animal); // Виведе: true
  console.log(myDog instanceof Dog);    // Виведе: true
  
  // Функція-конструктор для Cat, що також "наслідує" Animal
  function Cat(name) {
    Animal.call(this, "кіт");
    this.name = name;
  }
  
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.meow = function() {
    return "Мяу!";
  };
  
  const myCat = new Cat("Мурка");
  console.log(myCat.speak()); // Виведе: Це кіт
  console.log(myCat.meow());  // Виведе: Мяу!
  console.log(myCat instanceof Animal); // Виведе: true
  console.log(myCat instanceof Cat);    // Виведе: true