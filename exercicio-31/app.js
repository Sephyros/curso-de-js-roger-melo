/*
  01

  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do 
    seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário 
    do GitHub.
*/

const getData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
};

const getUser = async (username) => console.log(await getData(username));

getUser("Sephyros");

/*
  02

  - A partir do array numbers (abaixo), crie um novo array que contém somente 
    os números do array numbers que são divisíveis por 2 ou 3;
  - Exiba esse novo array no console.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getDivisibleBy2Or3 = (numbers) =>
  numbers.filter((number) => number % 2 == 0 || number % 3 == 0);
console.log(getDivisibleBy2Or3(numbers));

/*
  03

  - Declare um array no qual cada item desse array seja uma sílaba do seu nome.
  - A partir desse array, gere o seu nome usando a "língua do 'P'";
  - A língua do "P" é uma brincadeira onde você coloca a letra "P" antes de 
    cada sílaba de uma palavra falada, como se você estivesse falando em 
    código;
  - Exemplos de nomes na "língua do 'P'":
    - Roger => "PRoPger";
    - Natália => "PNaPtáPlia";
    - Rafaela => "PRaPfaPePla".
*/

const leonardo = ["Le", "o", "nar", "do"];
const roger = ["Ra", "fa", "e", "la"];
const natalia = ["Na", "ta", "lia"];
const rafaela = ["Ra", "fa", "e", "la"];

// const getNameInPLanguage = (name) => `P${name.join("P")}`;

const rogerGetNameInPLanguage = (name) =>
  name.reduce((acc, syllable) => `${acc}P${syllable}`, "");

console.log(rogerGetNameInPLanguage(leonardo));
// console.log(rogerGetNameInPLanguage(leonardo));

/*
  04

  - Declare uma constante que receba seu primeiro nome;
  - Exiba no console todas as letras do seu nome separadas, com a seguinte
    mensagem: '"LETRA" é a POSIÇÃOª letra do meu nome.';
  - Por exemplo, se o nome é "Roger", as mensagens exibidas no console devem 
    ser:
      - "R" é a 1ª letra do meu nome;
      - "o" é a 2ª letra do meu nome;
      - E assim por diante, até a última letra.

  Dica: pesquise pelo método split.
*/

const name = "Leonardo";
const logSplittedName = (name) =>
  name
    .split("")
    .forEach((letter, index) =>
      console.log(`"${letter}" é  a ${index + 1}ª letra do meu nome.`)
    );

logSplittedName(name);

/*
  05

  - Crie um objeto com as seguintes propriedades e tipos de valores:
    - name: String
    - lastname: String
    - age: Number
  - Exiba no console, em um array, todas as propriedades do objeto acima;
  - Não use nenhuma estrutura de repetição, nem crie o array manualmente.

  Dica: pesquise pelo método Object.keys().
*/

const myData = {
  name: "Leonardo",
  lastName: "Maciel",
  age: 33,
};

console.log(Object.keys(myData));

/*
  06

  - Implemente uma função que retorna as ocorrências de um determinado valor em 
    um array;
  - A função deve receber um array como 1º argumento e o valor a ser buscado no 
    array como 2º argumento;
  - Exemplo: se na invocação da função o array [1, 2, 3, 1] é passado como 1º 
    argumento e o número 1 é passado como 2º argumento, a função deve retornar 
    2, pois há duas ocorrências do número 1 no array;
  - Utilize o array abaixo para testar a função.
*/

const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60];
const countOccurences = (array, value) =>
  array.reduce((acc, item) => (item === value ? acc + 1 : acc), 0);
console.log(countOccurences(scores, 100));

/*
  07

  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método  
    filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];
    - filter([0, 1, 2], item => item) // [1, 2];
    - filter([1, 2, 3], item => item < 2) // [1];
    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
    - filter([1, 2, 3, 2, 1, 5], (item, index, array) =>
        index === array.indexOf(item)) // [1, 2, 3, 5];
  - Utilize os casos acima para testar sua função;
  - Se você não se lembra como o método filter funciona, há 2 opções:
    1) Reassistir à aula "O método filter" - Aula 01-03 da etapa 08;
    2) Pesquisar no MDN.
  
  Dica: lembre-se que o método filter inclui o item em questão no novo array 
  que está sendo gerado **apenas** se a função retorna um valor truthy.
*/
/*
const myFilter = (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element, (cbIndex = index), (cbArray = array))
      ? newArray.push(element)
      : null;
  }
  return newArray;
};*/

const filter = (array, func) => {
  let newArray = [];

  const filterItem = (item, index) => {
    const itemShouldBeAdded = func(item, index, array);

    if (itemShouldBeAdded) {
      newArray.push(item);
    }
  };
  array.forEach(filterItem);
  return newArray;
};

console.log(filter([1, 2, 3], (item) => item));
console.log(filter([0, 1, 2], (item) => item));
console.log(filter([1, 2, 3], (item) => item < 2));
console.log(filter([1, 2, 3, 5], (item, index) => item === index + 1));
console.log(
  filter(
    [1, 2, 3, 2, 1, 5],
    (item, index, array) => index === array.indexOf(item)
  )
);
