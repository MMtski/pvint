// Завдання 1: Знаходження максимального з двох чисел
function findMax(a, b) {
    return a > b ? a : b;
  }
  
  // Завдання 2: Функціональний вираз для віднімання
  const subtract = function(a, b) {
    return a - b;
  };
  
  // Завдання 3: Стрілкова функція для обчислення квадратного кореня
  const sqrt = (n) => Math.sqrt(n);
  
  // Завдання 4: Рекурсивна функція для обчислення суми геометричної прогресії
  function geometricProgression(n, a, r) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return a;
    }
    return a + geometricProgression(n - 1, a * r, r);
  }
  
  // Завдання 5: Функція-замикання для створення дільника
  function createDivider(divisor) {
    return function(value) {
      return value / divisor;
    };
  }
  
  // Завдання 6: Функція для застосування операції до двох чисел
  function applyOperation(a, b, func) {
    return func(a, b);
  }
  
  // Завдання 7*: Функція для обробки множини Set за допомогою колбеку
  function processSet(set, callback) {
    const result = new Set();
    for (let item of set) {
      result.add(callback(item));
    }
    return result;
  }
  
  // Демонстрація роботи:
  
  // Завдання 1
  console.log("Завдання 1: Максимум з 5 та 10 =", findMax(5, 10)); // Виведе: 10
  
  // Завдання 2
  console.log("Завдання 2: 15 - 7 =", subtract(15, 7)); // Виведе: 8
  
  // Завдання 3
  console.log("Завдання 3: Квадратний корінь з 25 =", sqrt(25)); // Виведе: 5
  
  // Завдання 4
  console.log("Завдання 4: Сума перших 5 членів ГП (2, 3) =", geometricProgression(5, 2, 3)); // Виведе: 242 (2 + 6 + 18 + 54 + 162)
  
  // Завдання 5
  const divideBy5 = createDivider(5);
  console.log("Завдання 5: 10 / 5 =", divideBy5(10)); // Виведе: 2
  
  // Завдання 6
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;
  console.log("Завдання 6: 5 + 3 =", applyOperation(5, 3, add)); // Виведе: 8
  console.log("Завдання 6: 5 * 3 =", applyOperation(5, 3, multiply)); // Виведе: 15
  
  // Завдання 7
  const numberSet = new Set([1, 2, 3, 3, 4]);
  const doubledSet = processSet(numberSet, (x) => x * 2);
  console.log("Завдання 7*: Множина після подвоєння =", Array.from(doubledSet)); // Виведе: [2, 4, 6, 8]