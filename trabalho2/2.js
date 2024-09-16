// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.



let livro = {
    titulo : 'O poder do Agora',
    autor: 'Eckhart Tolle',
    anoPublicacao: 2000,
    genero: 'Espiritualidade'
}

let possuiEditora


for (let propriedade in livro) {
    if (propriedade === 'editora') {
        possuiEditora = true
        break
    }
}

if (!possuiEditora) {
    livro.editora = 'Sextante'
}

console.log(livro)