// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


let estoque = [
    {produto: 'Placa mãe', quantidade: 4, minimo: 5},
    {produto: 'Processador', quantidade: 3, minimo: 5},
    {produto: 'Memoria', quantidade: 6, minimo: 5},
]


estoque.forEach(item => {
    if(item.quantidade < item.minimo) {
        item.quantidade *= 2
    }
})


console.log(estoque)