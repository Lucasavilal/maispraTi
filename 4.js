let pessoas = [
    { nome: 'Lucas', idade: 28, cidade: 'Poços de Caldas' },
    { nome: 'Diego', idade: 58, cidade: 'Passos' },
    { nome: 'Bruno', idade: 24, cidade: 'Goiania' },
    { nome: 'Beltrao', idade: 30, cidade: 'São Paulo' }
];


for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}