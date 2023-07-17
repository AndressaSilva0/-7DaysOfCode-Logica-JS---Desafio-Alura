
const prompt = require('prompt-sync')();

let carreira = prompt("Qual carreira você quer seguir? FrontEnd ou BackEnd?  ");
let linguagem =  "";

if (carreira === 'FrontEnd') {
 linguagem = prompt(" Caso esteja na área de Front-End, voce quer aprender React ou aprender Vue?  ")

}else if(linguagem === 'React'){
    console.log(`Voce escolheu ${linguagem}`)
}else if(linguagem === 'Vue') {
    console.log(`Voce escolheu ${linguagem}`)
}if (carreira === 'BackEnd') {
 linguagem = prompt("Caso esteja na área de Back-End, poderá aprender C# ou aprender Java?  ")
}else if (linguagem === 'C#'){
    console.log(`Voce escolheu ${linguagem}`)
}else if( linguagem === 'Java'){
    console.log(`Voce escolheu ${linguagem}`)
}else{
    console.log("Area Invalida")
}

let especialidade = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack  ");
if (especialidade == 1){
    console.log(`Continue aprendendo ${linguagem} para dominar a área de ${carreira}!`);
}
else if (especialidade == 2){
    console.log(`Voce precisa começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    console.log("Você não inseriu um valor válido!");
}

let mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo:  ");
while (mensagem === 'sim'){
    let tecnology = prompt("Qual a tecnologia escolhida?   ");
    console.log(`${tecnology} é realmente uma tecnologia muito boa para aprendizagem`)
    mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo:   ");
}