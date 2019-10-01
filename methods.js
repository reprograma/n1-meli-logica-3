const pessoa = {};
    pessoa.nome = 'Jude'
    pessoa.idade = 23
    pessoa.falar = function() {
        console.log(`Oi, meu nome é ${pessoa.nome} eu tenho ${pessoa.idade} anos.`)
        }
        
        console.log(pessoa.falar()) // Oi, meu nome é jude eu tenho 23 anos.