// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.



let funcionarios = [
    {
        nome: 'Lucas',
        cargo: 'Gerente',
        salario: 12500,
    },

    {
        nome: 'Marcio',
        cargo: 'Contador',
        salario: 5800
    },

    {
        nome: 'Ana',
        cargo: 'Auxiliar adminstrativo',
        salario: 5900
    },

    {
        nome: 'Lucia',
        cargo: 'Tecnico em Informatica',
        salario: 7500
    }
]


for (let funcionario of funcionarios) {
    let salarioMinimo = 5850;
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)
    }
}