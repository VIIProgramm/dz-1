import './style.css'

// Задание 1
let name = prompt('Введите имя')
alert(name)

// Задание 2
const year = 2023
let yearOfBirth = +(prompt('Введите год важего рождения') as string)
alert(year - yearOfBirth)

// Задание 3
let lenght = +(prompt('Введите длинну квадрата') as string)
alert(lenght ** 3)

// Задание 4
let radius = +(prompt('Введите радиус окружности') as string)
alert((radius ** 2) * Math.PI)

// Задание 5
let distace = +(prompt('Введите расстояние между городуми в км(единицу измерения указывать не нужно)') as string)
let time = +(prompt('Введите за сколько часов вы хотите проехать это расстояние') as string)
alert('Для этого вам нужно двигаться со скоростью ' + distace / time + ' км/час') 

// задание 6
const usdEuro = 0.92
let dollarUS = +(prompt('Доллар США') as string)
alert('Евро ' + usdEuro * dollarUS)

// задание 7
let memoryBank = +(prompt('Введите количество свободных ГБ в вашем електронном хранители') as string) * 1024
alert('Поместитья ' + memoryBank / 820 + ' фаилов')

// задание 8
let balance = +(prompt('Введите сколько рублей на вашем балансе') as string)
let price = +(prompt('Введите стоймость 1 шоколадки') as string)
alert('Вы можете купить ' + balance/price + ' шоколадок')

//Задание 9
let number = +(prompt('Введите трёхзначное число') as string)
let numberRev = ''
for (let i = 0; i < 3; i++){
    let n =number%10
    numberRev += String(n)
    number = Math.floor(number/10)
}
alert('Вот это число, но наоборот: ' + numberRev)

//Задание 10
number = +(prompt('Введите число') as string)
number % 2 == 0 ? alert('Чётное'):alert('Нечётное')
