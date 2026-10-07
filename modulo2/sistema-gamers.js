const prompt = require("prompt-sync")();
//Atividade Final: O Patch de Atualização
let time = [];
let continuar = true;
///function é usado para criar uma função, que é um bloco de código que pode ser reutilizado.
function mostrarmenu() {
    console.log("\n=====================================");
    console.log("Bem-vindo ao sistema de cadastro de jogadores");
    console.log("=====================================");
    console.log("1 - cadastrar ");
    console.log("2 - deletar ");
    console.log("3 - mostrar equipe");
    console.log("4 - cálculo da média da equipe");
    console.log("5 - atualizar pontuação");
    console.log("6 - sair");
    ///\n é usado para pular uma linha no console.

}

function mostraequipe() {
    if (time.length === 0) {
        return;
    }
    for(let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log(" | jogador: " + (i + 1) + ": " + jogador.nome + " | função: " + jogador.funcao + " | pontuação: " + jogador.pontuacao);

    }
}

function cadastrarjogador() {
    let nomejogador = prompt("Digite o nome do jogador:");
    let funcaojogador = prompt("Digite a função do jogador:");
    let pontuacaojogador = Number(prompt("Digite a pontuação do jogador:"));
///parseInt é usado para converter a string digitada pelo usuário em um número inteiro.
    
    if(isNaN(pontuacaojogador)) {
        console.log("pontuação inválida, tente novamente.");
        return;
    } else {
        let recruta = {
            nome: nomejogador,
            funcao: funcaojogador,
            pontuacao: pontuacaojogador
        };
        time.push(recruta);
        console.log("jogador " + nomejogador + " foi cadastrado com sucesso!");
    }
///objeto recruta é criado com as propriedades nome, funcao e pontuacao, que são preenchidas com os valores digitados pelo usuário. Em seguida, o objeto é adicionado ao array time usando o método push.

///push é usado para adicionar um elemento ao final do array.
}

function deletarjogador() {
    if (time.length === 0) {
        console.log("nenhum jogador cadastrado para deletar.");
        return;
///length é usado para verificar o tamanho do array. Se for igual a 0, significa que não há jogadores cadastrados.
    }
//return é usado para sair da função caso não haja jogadores cadastrados.
    let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar:");
    let indexdeletado;

    for (let i = 0; i < time.length; i++) {

        if (time[i].nome === nomeDeletado) {
           indexdeletado = i;
            break;
        }
    }
    if (indexdeletado === undefined) {
        console.log("jogador não encontrado.");
        return;
    }
    

        time.splice(indexdeletado, 1);
        console.log("jogador deletado com sucesso!");
   ///splice é usado para remover um elemento do array a partir do índice encontrado.
    }
    
function calcularmedia() {
    if (time.length === 0) {
    return;
     }

    let totalpontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalpontos = totalpontos + time[i].pontuacao;
    }

    let mediapontos = totalpontos / time.length;

    console.log("A média de pontuação da equipe é: " + mediapontos);
    }

function atualizarpontuacao() {
    
    let nomeAtualizar = prompt("Digite o nome do jogador que deseja atualizar a pontuação:");
    
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeAtualizar) {
            let pontosnovos = Number(prompt("Digite a nova pontuação do jogador:"));
            time[i].pontuacao += pontosnovos; 
            console.log("pontuação atualizada com sucesso!");
            encontrou =true;
            break;
            //break é usado para sair do loop caso o jogador seja encontrado e a pontuação seja atualizada.
            //+= é usado para somar a nova pontuação à pontuação atual do jogador.
        }
    }
        if (encontrou === false) {
        console.log("Jogador não encontrado.");
      }
}

while(continuar === true) {
    mostrarmenu();
    let opcao = prompt("digite sua opção: ");
    
    if (opcao === "1") { 
       cadastrarjogador();

    } else if (opcao === "2") { 
        deletarjogador();

    } else if (opcao === "3") {
        mostraequipe();

    } else if (opcao === "4") {
        calcularmedia();

    } else if (opcao === "5") {
        atualizarpontuacao();

    } else if (opcao === "6") {
        console.log("saindo do sistema...");
        continuar = false;

    } else {
        console.log("opção inválida, tente novamente");

    }

   
}

// Objetos: A Ficha Completa do Jogador

// Nos capítulos anteriores, nós aprendemos sobre Arrays (Listas). Arrays são ótimos para guardar uma fila de nomes: ["Fallen", "Coldzera", "Taco"]. Mas pense bem: um jogador profissional é apenas um nome? Não! Ele possui um nome, uma função (como Atirador ou Suporte) e uma pontuação no ranking.

// Se fôssemos usar apenas variáveis soltas, teríamos que criar três variáveis diferentes para cada pessoa, o que viraria uma bagunça. A solução do JavaScript para representar coisas do mundo real é o Objeto.

// Um Objeto agrupa várias características (que chamamos de propriedades) em uma única variável, abrindo e fechando chaves {}. É exatamente como preencher a ficha de inscrição de um jogador. Para acessar uma informação específica dentro do objeto, nós usamos a notação de ponto (.).



// Trecho de Código: JavaScript

// Criando o objeto (A Ficha do Jogador) 

// let jogadorEstrela = { 

// nome: "Fallen", 

// funcao: "Capitão / Atirador", 

// pontuacao: 2500, 

// estaAtivo: true 

// }; 

// // Acessando as informações com o uso do ponto (.) 

// console.log("--- PERFIL DO ATLETA ---"); 

// console.log("Nome: " + jogadorEstrela.nome); 

// console.log("Rota de Jogo: " + jogadorEstrela.funcao); 

// Podemos até alterar uma propriedade específica jogadorEstrela.pontuacao = jogadorEstrela.pontuacao + 100; console.log("Nova pontuação após a final: " + jogadorEstrela.pontuacao);

