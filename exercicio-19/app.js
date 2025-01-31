/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const form = document.querySelector(".quiz-form");
const scoreboard = document.querySelector(".score");
const correctAnswers = ["A", "C", "B", "D", "B", "A", "E", "C", "D", "E"];

let score = 0;

const calculateUserScore = () => {
  score = correctAnswers.reduce((score, correctAnswer, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value;
    const isUserAnswerCorrect = userAnswer === correctAnswer;

    if (isUserAnswerCorrect) {
      score += 100 / correctAnswers.length;
    }
    return score;
  }, 0);
};

const showFinalScore = () => {
  scrollTo({ top: 0, left: 0, behavior: "smooth" });
  animateFinalScore();
};

const animateFinalScore = () => {
  let delay = 0;
  if (score === 0) {
    scoreboard.textContent = `${score}% - que vergonha!`;
    return;
  }

  const timer = setInterval(() => {
    scoreboard.textContent = `${++delay}%`;
    if (delay === score) {
      return clearInterval(timer);
    }
  }, 5);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  calculateUserScore();

  showFinalScore();
});
