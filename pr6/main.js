function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;

    // Перевірка на сумісність для множення
    if (colsA !== rowsB) {
        console.error("Неможливо перемножити матриці: кількість стовпців A не дорівнює кількості рядків B");
        return null;
    }

    // Створення порожньої матриці результату
    const result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }

    // Множення матриць через вкладені цикли
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    // Вивід результату
    console.log("Результат множення матриць:");
    result.forEach(row => console.log(row.join(" ")));

    return result;
}

// Матриця A (3×3)
const A = [
    [2, 4, 6],
    [1, 3, 5],
    [7, 8, 9]
];

// Матриця B (3×2)
const B = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// Виклик функції
multiplyMatrices(A, B);