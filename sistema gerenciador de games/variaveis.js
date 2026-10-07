// Tipos de Dados: O DNA do Sistema

// Na programação, o computador precisa saber exatamente qual formato de informação ele está guardando na memória. Imagine a ficha do nosso GamerTeam: o nome do jogador, a pontuação e se ele é o capitão são dados interpretados de formas completamente diferentes pela máquina.

// String (Textos): Usamos para palavras, nomes e frases. No JavaScript, toda String deve estar obrigatoriamente entre aspas (simples ou duplas). Se você esquecer as aspas, o computador tentará executar a palavra como se fosse um comando e o sistema vai quebrar.

// Number (Números): Usado para níveis, pontuações e cálculos. Números nunca usam aspas. Se você digitar "10" + "10" (com aspas), o programa apenas junta os textos, resultando em "1010". Sem aspas (10 + 10), ele entende a matemática real e o resultado será 20.

// Boolean (Lógico): É o interruptor do código. Só aceita dois valores absolutos: true (verdadeiro) ou false (falso). É ideal para controlar estados, como verificar se um recruta está ativo na equipe principal.




// Trecho de Código: JavaScript

// // Exemplo de como o JavaScript lê o DNA dos dados

 let nome = "Fallen"; // String (Sempre com aspas)

 let pontuacao = 1500; // Number (Sem aspas)

 let estaAtivo = true; // Boolean (Palavra reservada)

// A variavel é responsável por armazenar os dados na memória do computador. O JavaScript é uma linguagem de tipagem dinâmica, ou seja, você não precisa declarar o tipo de dado que a variável vai receber. O próprio sistema entende o tipo de dado que está sendo armazenado e faz a leitura correta.
console.log("----perfil do jogador----");
console.log("Nome: ", nome);
console.log("Pontuação: ", pontuacao);
console.log("Está Ativo: ", estaAtivo);
//a variavel ja existe, mas o valor dela pode ser alterado a qualquer momento. Por exemplo, se o jogador ganhar mais pontos, podemos atualizar a pontuação:
pontuacao = pontuacao + 500;
console.log("Pontuação atualizada: ", pontuacao);
//constantes são variáveis que não podem ser alteradas depois de declaradas. Por exemplo, se quisermos definir a quantidade máxima de jogadores na equipe, podemos usar uma constante:
const equipe = "ninjas"; // String (Sempre com aspas)
console.log("Equipe: ", equipe);
//se tentarmos alterar o valor da constante, o sistema vai quebrar:
// Operações e Cálculo da Média

// Agora que já conhecemos os números, como fazemos o sistema trabalhar para nós? O JavaScript funciona como uma calculadora superpotente através dos Operadores Aritméticos.Nós utilizamos os sinais clássicos: soma (+), subtração (-), multiplicação (*) e divisão (/). Em nossa equipe de E-sports, é vital analisar a média de desempenho do time todo final de temporada.

// Atenção: Assim como na matemática tradicional da escola, a divisão e a multiplicação ocorrem antes da soma. Para calcular médias corretamente, precisamos usar parênteses () para priorizar a soma de todas as pontuações primeiro.




// Trecho de Código: JavaScript

// let pontosJogadorA = 120;

// let pontosJogadorB = 180;

// // O parênteses obriga o sistema a somar antes de dividir

// let media = (pontosJogadorA + pontosJogadorB) / 2;

// console.log("A média da equipe é: " + media);

