// use Map, filter, forEach, find e ou Reduce.

//1
const numbers = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
]
// retorne numeros multiplos de 3
// const multiplosDe3e5 = numbers.filter(function(num) {
//   return num % 3 === 0 && num % 5 === 0
// })
// console.log(multiplosDe3e5)
// retorne numeros multiplos de 3 e de 5

//2
// const palavrinhas = [
//   "bolacha",
//   "biscoito",
//   "bombom",
//   "bala",
//   "abestalhado",
//   "MASSA",
//   "pastilha"
// ]
// retorne palavras que tenham menos de 5 letras
//
//3
// const numbers = [3, 4, 5, 6, 6, 7]
// // itere pela array modificando todos os items, multiplicando eles por 3.
// // depois prite quantos numeros são maiores que 10
// // depois quantos são menores que 10.
// // printe o numero menor que 10.

const novaArr = numbers.map(item => item * 3)
const maiorQ10 = novaArr.filter(item => item > 10)
console.log(maiorQ10.length)

//4
// const numbers = [
//   1,
//   3,
//   4,
//   6,
//   8,
//   9,
//   56,
//   34,
//   23,
//   2,
//   89,
//   101,
//   320,
//   12,
//   13,
//   45,
//   40,
//   43,
//   88
// ]
// calcule o valor total da soma dos items da array numbers

//5 -
const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

// // retore a mulher que tiver o user = 238
// const achada = mulheres.find(item => item.user === 238)
// console.log(achada.name)
// // retorne o nome das mulheres que gostam de estudar
// const estudiosas = mulheres.filter(item => item.hobbies.indexOf("estudar") > -1)
// console.log(estudiosas.name)

// estudiosas.map(item => {
//   console.log(item.name)
// })
