let value1 = 13
let  value2 = Math.floor(Math.random() * 100)

/* сначала мы получаем случайное число с помощью 
вызова команды Math.random(), дальше это число умножается 
на 100 и полученное значение отправляется в команду Math.floor.
И уже результат этих вычимлений сохраняеся в переменной value2*/

console.log(value1 + value2/5 + 17);
/* сначала выполняется действие value2/5, потом по порядку - 
value1 + результат value2/5 + 17. */