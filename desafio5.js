const prompt = require('prompt-sync')();

let lista_de_compras = {
    "frutas": [],
    "verduras": [],
    "laticinios": [],
    "doces": [],
    "bebidas": [],
    "congelados": []
}

let resposta;

do {
    console.log("Qual produto você deseja inserir?: ");
    let produto = prompt();
    
    console.log("Em qual categoria você deseja inserir?: ");
    let categoria = prompt();
    
    if (lista_de_compras.hasOwnProperty(categoria)) {
        lista_de_compras[categoria].push(produto);
    } else {
        console.log("Categoria inválida. Produto não adicionado.");
    }

resposta = prompt('Digite "sim" para adicionar algum item à lista de compras ou "não" para completar a ação: ');
} while (resposta === 'sim');

for(let key in lista_de_compras){
    console.table([key + " = " + lista_de_compras[key]])
}