// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let users = new Map();
users.set("phone 1", "memory 128 mb");
users.set("phone 2", "memory 64 mb");
users.set("phone 3", "memory 128 mb");
users.set("phone 4", "memory 512 mb");
users.set("phone 5", "memory 128 mb");
users.set("phone 6", "memory 64 mb");

for (let user of users.keys()){
    console.log(user + " has " + users.get(user));
}