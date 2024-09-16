// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.


let produtos = [
    {
        nome: 'Sabão',
        preco: 25,
        desconto: 0
    },


    {
        nome: 'Escova de Dente',
        preco: 15,
        desconto: 0
    },

    {
        nome: 'Detergente',
        preco: 5,
        desconto: 0
    }
]

let novoDesconto = 0.1

produtos.forEach(produto => {
    let novoPreco = produto.preco * (1 - novoDesconto)

    produto.preco = novoPreco

    console.log(`Produto: ${produto.nome}, Novo Preço: R$ ${produto.preco.toFixed(2)}`)
})