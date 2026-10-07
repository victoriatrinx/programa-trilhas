// const pronpt = require('prompt-sync')();

// let nome = pronpt("Digite o nome do jogador: ");
// let pontuacao = Number(pronpt("Digite a pontuação do jogador: "));
// const pontuacaominima = 1000;
// console.log("analizando perfil");
// if (pontuacao >= pontuacaominima) {
//     console.log("Parabéns! O jogador " + nome + " foi aprovado com a pontuação de " + pontuacao + " pontos.");
// } else {
//     console.log("Infelizmente, o jogador " + nome + " não atingiu a pontuação mínima requerida.");
// }
// //if é uma estrutura de decisão que permite ao programa tomar diferentes caminhos com base em condições. No exemplo acima, verificamos se a pontuação do jogador é maior ou igual à pontuação mínima exigida. Se a condição for verdadeira, o programa exibe uma mensagem de aprovação; caso contrário, exibe uma mensagem de reprovação.
// // Validação: Protegendo o Sistema de Erros



// // Um dos maiores desafios na programação não é fazer o código funcionar, mas sim garantir que ele não quebre quando o usuário fizer algo inesperado. Na programação, dizemos que "nunca devemos confiar na entrada do usuário".

// // Imagine que o nosso sistema do GamerTeam peça a pontuação de um novo recruta. O esperado é que o usuário digite 1500. Mas e se ele, por engano, digitar a palavra "Mil e quinhentos"? Quando o JavaScript tentar fazer um cálculo matemático com essa palavra, ele vai gerar um erro chamado NaN (que significa Not a Number, ou seja, Não é um Número). Se esse erro entrar no nosso banco de dados, ele pode corromper a média de toda a equipe.

// // Para evitar isso, nós usamos a Validação de Dados. A ferramenta perfeita para isso é a função nativa isNaN(). Ela atua como um segurança de balada: ela olha para a variável e pergunta "Isso aqui NÃO é um número?". Se for verdade (se for um texto, por exemplo), ela barra a entrada.




// // Trecho de Código: JavaScript

// // Exemplo de validação de pontuação 

// let entradaUsuario = "Cem"; // O usuário digitou texto em vez do número 100 let pontuacaoConvertida = Number(entradaUsuario); 

// // O segurança isNaN() entra em ação 

// if (isNaN(pontuacaoConvertida)) { 

// console.log("ERRO GRAVE: Você não digitou um número válido. Cadastro cancelado."); 

// } else { 

// console.log("Sucesso! Pontuação cadastrada: " + pontuacaoConvertida); 

// }


