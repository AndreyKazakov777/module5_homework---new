// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


let arr = ['a', 'b', 'c', 'd', 'e'];
 
let same = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let e = i + 1; e < arr.length; e++){
        if (typeof(arr[i]) !== typeof(arr[e])){
            same = false;
        }
    }
}
if (same) {
    console.log('Элементы в массиве одинаковые');
} else {
    console.log('Элементы в массиве не одинаковые');
}
