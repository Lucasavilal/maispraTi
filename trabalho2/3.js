// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

function filtrarPropriedades(objeto, valorMinimo) {
    let novoObjeto = {};
    for (let propriedade in objeto) {
             if (objeto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

let produto = {
    nome: 'macarrao',
    preço: 7,
    quantidade: 2,
    peso: 1
};

let valorMinimo = 1;
let resultado = filtrarPropriedades(produto, valorMinimo);

console.log(resultado);