function drawChessBoard() {
    let n = parseInt(prompt("Введіть розмір шахової дошки (n):"));
    let board = "";
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        board += (i + j) % 2 === 0 ? "1 " : "0 ";
      }
      board += "\n";
    }
  
    alert(board);
    console.log(board);
  }
  
  function geometricSeries() {
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
  }
  
  function calculator() {
    while (true) {
      let operation = prompt("Введіть операцію (+, -, *, /, %) або 'exit' для виходу:");
  
      if (operation === "exit") break;
  
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
          result = num2 === 0 ? "Ділення на нуль неможливе!" : num1 / num2;
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
  }
  
  // Виконання всіх частин по черзі
  drawChessBoard();
  geometricSeries();
  calculator();
  