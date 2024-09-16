// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.


let vendas = [
    {produto: 'Placa mãe', quantidade: 5, valor: 800},
    {produto: 'Placa de video', quantidade: 3, valor: 4300},
    {produto: 'Processador', quantidade: 2, valor: 1200}
]

let valorTotal = 0

vendas.forEach(venda => {
    let valorVenda = venda.quantidade * venda.valor
    valorTotal += valorVenda
})


console.log(`Valor total das vendas: R$ ${valorTotal.toFixed(2)}`);