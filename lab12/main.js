let task = prompt("Оберіть завдання (1 - ромб із цифр, 2 - числовий ряд, 3 - вгадай число):");

switch (task) {
    case "1":
        // Завдання 1: Ромб із цифр
        let n = parseInt(prompt("Введіть розмір ромба (n):"));
        for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) row += j;
            for (let j = i - 1; j >= 1; j--) row += j;
            alert(row);
        }
        for (let i = n - 1; i >= 1; i--) {
            let row = '';
            for (let j = 1; j <= i; j++) row += j;
            for (let j = i - 1; j >= 1; j--) row += j;
            alert(row);
        }
        break;

    case "2":
        // Завдання 2: Числовий ряд і сума
        let num = parseInt(prompt("Введіть число n для обчислення суми ряду:"));
        let sum = 0;
        let series = "";

        for (let i = 1; i <= num; i++) {
            sum += 1 / i;
            series += "1/" + i + (i < num ? " + " : "");
        }

        alert("Ряд: " + series);
        alert("Сума ряду: " + sum.toFixed(4));
        break;

    case "3":
        // Завдання 3: Вгадай число
        let target = Math.floor(Math.random() * 100) + 1;
        let guess;

        do {
            guess = parseInt(prompt("Вгадай число від 1 до 100:"));
            if (guess < target) {
                alert("Більше!");
            } else if (guess > target) {
                alert("Менше!");
            } else {
                alert("Вітаю! Ви вгадали число " + target + "!");
            }
        } while (guess !== target);
        break;

    default:
        alert("Невірний вибір завдання.");
}
