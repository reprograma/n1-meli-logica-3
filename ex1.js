//1 - Dada a array const xx = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array imprimindo na tela todos os dados que incluem nela

// const xx = [23, 43, 63 ,73, 83, 93, 102];
// for(let i=0; i< xx.length; i++){
//     console.log(xx[i])
// }


// 2- Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no começo dessa array.

// const doces = ['sorvete', 'pirulito', 'bombom'];
// doces.unshift("chocolate")
// console.log(doces);

// 3 Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no final dessa array.
// const doces = ['sorvete', 'pirulito', 'bombom'];
// doces.push('torta')
// console.log(doces);


//  4- Dada a array const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// inverta a ordem dos items e log na tela : 'dance of days', 'blink182', 'linking park', 'fresno'

// var bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// var invertido = bandasEmo.reverse();
// console.log(invertido)



// 5 - Dada a array const array = [23, 45, 13, 71];
// Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71
// const array = [23, 45, 13, 71];
// array.splice =[2, 0, 11]
// console.log(array)


//6-  Dada a array const array = [23, 45, 13, 17];
// Tire o número 45 da array.
// const array = [23, 45, 13, 17];
// array.splice = [45];
// console.log(array)


// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela
// let count = 0
// const array = []
// for (let i = 1; count < 10; i++){
//     if (i % 2 !== 0){
//         array.push(i)
//         count++
//     }
// }

// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.
// const x = [23, 43, 63 ,73, 83, 93, 102];
// const novaArray = []
// for (let i=0; i <= x.length -1; i++){
//      novaArray.push(x[i] + 2)
//  }
// console.log(novaArray)

// 9- dada a array const lista = [56, 89, 34, 12, 23, 55, 9]
// ordene a lista .
// const lista = [56, 89, 34, 12, 23, 55, 9];
// lista.sort(function(a,b){return a-b});
// console.log(lista);