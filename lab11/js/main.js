console.log(
    "Лабораторна робота №11: Особливості ініціалізації змінних Javascript"
);

console.log("Завдання 1: Аналіз hoisting");
var a = 10;// Передбачте результат виконання, потім запустіть код та поясніть в коментарі.
let b = 20;
const c = 30;
console.log(a); // undefined (hoisting: змінна існує, але не ініціалізована)
console.log(b); // ReferenceError (let не піднімається)
console.log(c); // ReferenceError (const теж не піднімається)


console.log("Завдання 2: Робота з областю видимості (scope)");
// Передбачте, які змінні будуть доступні після if-блоку. Додайте відповідний коментар.
function testScope() {
    if (true) {
        var x = 5; // Доступна поза блоком (var має функціональну область видимості)
        let y = 10; // Не доступна поза блоком (блочна область видимості)
        const z = 15; // Не доступна поза блоком (блочна область видимості)
    }
    console.log(x); // 5
    console.log(y); // ReferenceError
    console.log(z); // ReferenceError
}

testScope();

console.log("Завдання 3: Робота з типами даних");
// Передбачте результати виконання коду, запустіть код та поясніть його. Додайте відповідний коментар.
console.log(5 + "5"); // "55" (конкатенація, число перетворюється на рядок)
console.log("5" - 2); // 3 (рядок "5" перетворюється на число)
console.log(true + false); // 1 (true -> 1, false -> 0, 1 + 0 = 1)
console.log(null + 1); // 1 (null -> 0, 0 + 1 = 1)
console.log(undefined + 1); // NaN (undefined -> NaN, NaN + 1 = NaN)
console.log(0 == false); // true (нестроге порівняння: 0 та false еквівалентні)
console.log(0 === false); // false (строге порівняння: різні типи)

console.log("Завдання 4: const та об'єкти");
// Передбачте результати виконання коду, запустіть код та поясніть його. Додайте відповідний коментар.
const person = {
    name: "John",
    age: 30,
};

person.age = 31; // Можна змінити властивість
person.city = "New York"; // Можна додати нову властивість
console.log(person); // { name: "John", age: 31, city: "New York" }

Object.freeze(person);
person.age = 32; // Не зміниться (freeze забороняє зміни)
delete person.city; // Не видалиться
console.log(person); // { name: "John", age: 31, city: "New York" }

// person = { name: "Alice", age: 25 }; // TypeError (const не дозволяє переназначення)

console.log("Завдання 5: Визначення типу даних");
// Передбачте результати виконання коду, запустіть код та поясніть його. Додайте відповідний коментар.
function checkType(value) {
    return typeof value;
}

console.log(checkType(10)); // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(null)); // "object" (це особливість JS, історична помилка)
