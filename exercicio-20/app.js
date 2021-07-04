/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

const message =
  "Um segundo e meio se passaram desde que a página foi carregada";
setTimeout(console.log, 1500, message);

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const startCounterButton = document.querySelector(".button-init-counter");
const stopCounterButton = document.querySelector(".button-stop-counter");
const timerContainer = document.querySelector(".counter-container");

let timer = null;

const incrementCounter = () => {
  const incrementedCounter = Number(timerContainer.textContent) + 1;
  timerContainer.textContent = incrementedCounter;
};

const stopCounter = () => {
  clearInterval(timer);
  timerContainer.textContent = 0;
};

startCounterButton.addEventListener("click", () => {
  timer = setInterval(incrementCounter, 1000);
});

stopCounterButton.addEventListener("click", stopCounter);

/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

// já havia feito sem saber

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

// já havia feito sem saber

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

// Não consegui quebrar em mais partes ou tornar mais legivel

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenv olveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
// https://gamesquiz.netlify.app/
