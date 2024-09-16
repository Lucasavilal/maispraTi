// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.


let clientes = [
    {nome: 'Lucas', idade: 28, cidade: 'Alfenas'},
    {nome: 'Bruno', idade: 25, cidade: 'Goiania'},
    {nome: 'Diego', idade: 27, cidade: 'Passos'},
    {nome: 'Gabriel', idade: 39, cidade: 'Alfenas'},
    {nome: 'Felipe', idade: 32, cidade: 'Poços de Caldas'}
]

let contador = 0

clientes.forEach(cliente => {
    if(cliente.idade >= 30){
        contador++
    }
})

console.log(`Numero de clientes com mais de 30 anos : ${contador}`)