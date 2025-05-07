class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo() {
        return `Назва: ${this.name}, Ціна: ${this.price} грн, Категорія: ${this.category}`;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return `Ім'я користувача: ${this.name}`;
    }
}

class Customer extends User {
    constructor(name) {
        super(name);
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    viewOrders() {
        if (this.orders.length === 0) {
            return `${this.name} не має жодних замовлень.`;
        }
        let ordersInfo = `${this.name} має наступні замовлення:\n`;
        this.orders.forEach((order, index) => {
            ordersInfo += `--- Замовлення №${index + 1} ---\n`;
            ordersInfo += order.getInfo();
        });
        return ordersInfo;
    }
}

class Order {
    constructor() {
        this.products = [];
        this.totalAmount = 0;
    }

    addProduct(product) {
        this.products.push(product);
        this.totalAmount += product.price;
    }

    getInfo() {
        if (this.products.length === 0) {
            return `Замовлення порожнє.`;
        }
        let productsInfo = `Товари в замовленні:\n`;
        this.products.forEach(product => {
            productsInfo += `- ${product.getInfo()}\n`;
        });
        productsInfo += `Загальна сума: ${this.totalAmount.toFixed(2)} грн`;
        return productsInfo;
    }
}

// ===== Тестування роботи програми =====

// Створення продуктів
const product1 = new Product("Яблуко", 15.50, "Фрукти");
const product2 = new Product("Молоко", 32.00, "Молочні продукти");
const product3 = new Product("Хліб", 28.75, "Хлібобулочні вироби");

// Створення користувача (не покупця)
const regularUser = new User("Гість");
console.log(regularUser.getInfo()); // Виведе: Ім'я користувача: Гість

// Створення покупця
const customer1 = new Customer("Олена");
console.log(customer1.getInfo()); // Виведе: Ім'я користувача: Олена

// Створення замовлень
const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

const order2 = new Order();
order2.addProduct(product3);
order2.addProduct(product1);

// Додавання замовлень покупцю
customer1.addOrder(order1);
customer1.addOrder(order2);

// Перегляд замовлень покупця
console.log(customer1.viewOrders());
/*
Виведе в консоль:
Олена має наступні замовлення:
--- Замовлення №1 ---
Товари в замовленні:
- Назва: Яблуко, Ціна: 15.5 грн, Категорія: Фрукти
- Назва: Молоко, Ціна: 32 грн, Категорія: Молочні продукти
Загальна сума: 47.50 грн
--- Замовлення №2 ---
Товари в замовленні:
- Назва: Хліб, Ціна: 28.75 грн, Категорія: Хлібобулочні вироби
- Назва: Яблуко, Ціна: 15.5 грн, Категорія: Фрукти
Загальна сума: 44.25 грн
*/

// Створення ще одного покупця без замовлень
const customer2 = new Customer("Андрій");
console.log(customer2.viewOrders()); // Виведе: Андрій не має жодних замовлень.