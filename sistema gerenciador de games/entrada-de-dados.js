const pronpt = require('prompt-sync')();

console.log("----------cadastro de novo recruta----------");
let nome = pronpt("Digite o nome do jogador: ");
console.log("Nome do jogador: ", nome);

let pontuacao = Number(pronpt("Digite a pontuação do jogador: "));
console.log("Pontuação do jogador: ", pontuacao);
//number() é uma função que converte o valor digitado pelo usuário em um número. Se não utilizarmos essa função, o valor digitado será interpretado como uma string, e não como um número, o que pode causar problemas em cálculos futuros.
//prompt-sync é uma biblioteca que permite a entrada de dados no terminal. Ela funciona como um prompt de comando, onde o usuário pode digitar informações que serão armazenadas em variáveis para uso posterior no programa.
console.log("Sucesso! O jogador " + nome + " foi cadastrado com sucesso com a pontuação de " + pontuacao + " pontos.");
//conquetenação é o processo de unir duas ou mais strings em uma única string. No exemplo acima, usamos o operador + para concatenar o nome do jogador e a pontuação em uma mensagem de sucesso.