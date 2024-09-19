// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.


let transacoes = [
    {tipo : 'entrada', valor : 3000},
    {tipo : 'saida', valor : 2000},
    {tipo : 'entrada', valor : 4500},
    {tipo : 'saida', valor: 3200}
]

let saldoFinal = 0

transacoes.forEach(transacao => {
  if(transacao.tipo === 'entrada')
  {saldoFinal += transacao.valor} else {
    saldoFinal -= transacao.valor
  }
})


console.log(`O valor final é ${saldoFinal}`)