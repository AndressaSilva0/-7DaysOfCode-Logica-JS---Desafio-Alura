
const prompt = require('prompt-sync')();


let nome = prompt("Qual é o seu nome? ");
let idade = prompt("Quantos anos voce tem? ");
let linguagem = prompt("Qual a sua linguagem de programação? ");


console.log({nome, idade, linguagem});

let resposta = prompt(`Você gosta de estudar essa linguagem ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO: `)
if (resposta == 1){
 console.log("Sim, estou gostando")

}
if (resposta == 2){
 console.log("Não estou gostando")
 
}