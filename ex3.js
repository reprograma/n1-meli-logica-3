<<<<<<< HEAD
// //objetos

// // 1.
// // Defina um objeto de
// // Javascript que descreva
// // um dos pokemons da lista
// // de pokemons do Wikipedia.
// // com pelo menos 4 propriedades e 1 método
// // ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

// const pokemon = {
//   nome: "Charmander",
//   nomeJapones: "Hitokage",
//   numeroJohto: 234,
//   evoluiDe: "Ovo"
// }

// // 2.
// // Printe no console a seguinte
// // frase: "Oi, meu nome é  < >.
// // e meu nome japones é < >."

// pokemon.frase = function() {
//   return `Hello, my name is ${pokemon.nome}. And my name in Japanese ${pokemon.nomeJapones}.`
// }

// pokemon.frase()

// // 3.
// // Adicione uma nova propriedade ao
// // seu pokemon chamada `sabe_voar`
// // (ou algo do tipo) e defina
// // ela como `true` ou `false`.
// pokemon["sabe_voar"] = true

// // 4.
// // Adicione um método ao seu pokemon
// // chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// // To voaaaaaando!".
// pokemon.fly = function() {
//   if (pokemon.sabe_voar) {
//     return `I'm flyyyyyying`
//   } else {
//     return "I can't fly"
//   }
// }

// // 5.
// // Adicione um método chamado
// // `action` ao seu pokemon
// // que retorna randomicamente uma
// // das Strings "FIGHT", "BAG" ou "RUN".

// pokemon["action"] = function() {
//   let frase = ["Fight", "Bag", "Run"]
//   let rand = Math.floor(Math.random() * frase.length)
//   return frase[rand]
// }

// pokemon.action()

// // 6.
// // Adicione um método chamado
// // `pergunta` ao seu pokemon que printa
// // no console "O que o  < > vai fazer?" e
// // retorna o resultado do metodo
// // `acao`.
// pokemon.ask = function() {
//   console.log(`What will ${pokemon.name} do?`)
//   return pokemon.action()
// }

// // 7.
// // Printe todas as propriedades
// // do seu pokemon no console.
// for (const key in pokemon) {
//   console.log(key)
// }

// // 8.
// // Printe todas as propriedades
// // e seus respectivos valores no
// // console no seguinte formato:
// // <propriedade>: <valor>
// for (const key in pokemon) {
//   console.log(`Chave:${key}| valor:${pokemon[key]}`)
// }
=======
//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."
// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".
// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".
// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.


const eevee = {};
    eevee.japones = 'Eievui'
    eevee.numero = 184
    eevee.nacional = 133
    eevee.evolution = ["Jolteon, Vaporeon, Flareon, Umbreon e Espeon"]
    eevee.sabe_voar = false
    eevee.speak = function() {
        console.log(`Oi, eu sou o eevee! meu nome em japonês é ${eevee.japones}, meu número em Johto é ${eevee.numero}, meu número
        nacional é ${eevee.nacional} e minha evoluções são ${eevee.evolution}!`)
        }
    console.log(eevee.speak()) // propriedades do eevee

    eevee.fly = function() {
        if (eevee.sabe_voar == (true)) {
            console.log("to voandoooooo!")
            
        } else {
            console.log ("Desculpa, nao sei voar :/")
        }
    }
    console.log(eevee.fly())


    const actions = ["I'LL FIGHT", "I'LL GO TO BAG", "I'LL RUN"]
    let randompokemonaction = actions[Math.floor(Math.random()*actions.length)];
    eevee.action = function() {
         console.log (randompokemonaction)               
    }
    console.log(`O que você vai fazer? ${randompokemonaction}`)

    


// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato
// <propriedade>: <valor
>>>>>>> primeiros exercicios semana 3

//9 Faça uma função construtora de pokemon
function Pokemon(nome, nomeJapa, evolucao) {
  this.nome = nome
  this.nomeJapa = nomeJapa
  this.evolucao = evolucao
}

const pokemon1 = new Pokemon("charmander", "Hitokage", "ovo")

console.log(pokemon1.nome)
