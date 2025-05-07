let n = parseInt(prompt("Введіть розмір шахової дошки (n):"));
let board = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if ((i + j) % 2 === 0) {
      board += "1 ";
    } else {
      board += "0 ";
    }
  }
  board += "\n";
}

alert(board);
console.log(board);

let a = parseFloat(prompt("Введіть перший елемент ряду (a):"));
let r = parseFloat(prompt("Введіть співвідношення (r):"));
let n = parseInt(prompt("Введіть кількість членів ряду (n):"));

let series = "";
let sum = 0;

for (let i = 0; i < n; i++) {
  let term = a * Math.pow(r, i);
  series += term + (i < n - 1 ? ", " : "");
  sum += term;
}

alert("Числовий ряд: " + series);
alert("Сума ряду: " + sum);
console.log("Числовий ряд:", series);
console.log("Сума ряду:", sum);

while (true) {
  let operation = prompt("Введіть операцію (+, -, *, /, %) або 'exit' для виходу:");

  if (operation === "exit") {
    break; // Вихід з нескінченного циклу
  }

  let num1 = parseFloat(prompt("Введіть перше число:"));
  let num2 = parseFloat(prompt("Введіть друге число:"));
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Ділення на нуль неможливе!";
      } else {
        result = num1 / num2;
      }
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Невірна операція!";
  }

  alert("Результат: " + result);
  console.log("Операція:", operation, num1, num2, "=", result);
}

alert("Програма завершена.");
console.log("Програма завершена.");