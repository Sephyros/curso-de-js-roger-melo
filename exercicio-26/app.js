/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
const myTestDate = new Date();
const formatDate = (date) => {
  const day = date.getDay() <= 9 ? "0" + date.getDay() : date.getDay();
  const month = date.getMonth() <= 9 ? "0" + date.getMonth() : date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
console.log(formatDate(myTestDate));

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const longStrangeFormat = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDay();
  const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date.getMonth()
  );
  const year = date.getFullYear();
  const time = `${hours <= 9 ? "0" + hours : hours}:${minutes}`;
  const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    date.getDay()
  );
  return `${time} - ${weekday}, ${day} de ${month} de ${year}`;
};
console.log(longStrangeFormat(myTestDate));

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true };
const { id, isVerified } = user;
console.log(id, isVerified);

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: "Bender" };
const robotB = { name: "HAL 9000" };
const { name: nameA } = robotA;
const { name: nameB } = robotB;
console.log(nameA, nameB);

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = "a";
const b = "b";
const c = "c";

const shorthandedObject = { a, b, c };
console.log(shorthandedObject);

/*
  06

  - Refatore o código abaixo.
*/

// Não consegui identificar o que deveria ser refatorado

const useDataSomewhereElse = (value) => {
  console.log(value);
};

const updateSomething = (data = {}) => {
  const target = data.target;
  const property = data.property;
  let willChange = data.willChange;

  if (willChange === "valor indesejado") {
    willChange = "valor desejado";
  }

  useDataSomewhereElse({
    target: target,
    property: property,
    willChange: willChange,
  });
};

updateSomething({ target: "1", property: "2", willChange: "valor indesejado" });

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

// Não consegui identificar o que deveria ser refatorado

const clockContainer = document.querySelector(".clock-container");

const updateClock = () => {
  const present = new Date();
  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `;

  clockContainer.innerHTML = clockHTML;
};

setInterval(updateClock, 1000);
