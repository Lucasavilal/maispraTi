// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.



let alunos = [
    {
        nome: 'Lucas', nota1: 10,
        nota2: 10
    },

    {
        nome: 'Marcio',
        nota1: 8,
        nota2: 7
    },

    {
        nome: 'Santiago',
        nota1: 3,
        nota2: 1
    },

    {
        nome: 'Marcelo',
        nota1: 3,
        nota2: 6
    }
]


for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;

    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
}