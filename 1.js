// Manipulação de Objetos
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.


let carro = {
    marca : 'volkswagem',
    modelo: 'gol',
    ano: 2008,
    cor: 'Preto'
}


for (let propriedade in carro) {
    console.log(`${propriedade} : ${carro[propriedade]}`)
};


