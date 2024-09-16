// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.


let filmes = [
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'The Matrix', diretor: 'Lana Wachowski, Lilly Wachowski', anoLancamento: 1999 },
    { titulo: 'Parasite', diretor: 'Bong Joon-ho', anoLancamento: 2019 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', anoLancamento: 1994 }
]

let titulos = []


filmes.forEach(filme => {
    titulos.push(filme.titulo)  
});

console.log(titulos)