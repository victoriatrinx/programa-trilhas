const prompt = require("prompt-sync")();

// let podecorrer = false

// if(podecorrer) {
// }
let continuar = true;

while(continuar === true) {
    let nomeUsuario = prompt("Digite o nome do usuário (ou 'sair'):");

    if(nomeUsuario === 'sair'){
        continuar = false;
    } else {
        console.log("Usuario" + nomeUsuario + "foi cadastrado com sucesso!");
    }
}
// Criando o Menu: Controle de Fluxo com Switch

// Até agora, nós usamos o if e o else para tomar decisões. Eles são ótimos para testar condições matemáticas (como "se a pontuação for maior que 1000"). Mas e quando precisamos criar um menu com várias opções exatas, como num caixa eletrônico ou na tela inicial de um jogo?

// Usar vários if seguidos deixaria o código feio e confuso. É aqui que brilha a estrutura switch / case. Ela avalia o valor exato de uma variável e "liga" a chave (switch) correspondente ao caso (case) adequado.

// A regra de ouro do switch é o uso do comando break. Assim que o computador encontra e executa o caso correto, o break avisa que o trabalho terminou, impedindo que o sistema continue lendo as outras opções do menu. E se o usuário digitar uma opção que não existe (como a opção 9 num menu que só vai até 4)? Nós usamos o default, que é a resposta padrão para escolhas inválidas.

// Trecho de Código: JavaScript

// Simulando a escolha do usuário no painel do GamerTeam 

// let opcaoEscolhida = "2"; 

// switch (opcaoEscolhida) { 

// case "1": 

// console.log("Abrindo o painel de NOVO CADASTRO..."); 

// break; // O break impede que o código continue descendo 

// case "2": 

// console.log("Carregando a LISTA DE JOGADORES..."); 

// break; 

// case "3": 

// console.log("Calculando a MÉDIA DA EQUIPE..."); 

// break; 

// default: 

// // O default pega tudo que não for 1, 2 ou 3 

// console.log("Opção inválida. Por favor, escolha um número do menu."); 

// break; 

// }

