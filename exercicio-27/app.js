/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

console.log("Linha 1");
console.log("Linha 2");
console.log("Linha 3");
console.log("Linha 4");

setTimeout(() => {
  console.log("Código assíncrono executado!");
}, 2000);

console.log("Linha 5");
console.log("Linha 6");
console.log("Linha 7");
console.log("Linha 8");

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting(name) {
  console.log(`olá, ${name}`);
}

const x = (callback) => {
  callback("Leonardo");
};

x(logGreeting);

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20];
const getLessThanFive = (num) => num < 5;
const lesserThanFive = numbers.filter(getLessThanFive);
console.log(lesserThanFive);

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209];
const getTotalPrice = (acc, price) => (acc += price);
const totalPrice = prices.reduce(getTotalPrice, 0);

console.log(`Preço total: ${totalPrice}`);

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
  - Não insira `car['color'] = azul`.
*/

let car = { color: "amarelo" };
let secondCar = car;
secondCar.color = "azul";
console.log(car.color, secondCar.color);

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const exercise6 = (param1, param2, param3) =>
  [param1, param2, param3].some((value) => !value)
    ? "A função deve ser invocada com 3 argumentos"
    : "A função foi invocada com 3 argumentos";
console.log(exercise6("p1", 2, "p3"));

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/
const getPluralOrSingular = (quantity, singular, plural) =>
  quantity === 1 ? singular : plural;

const getAvailableSpacesMessage = (spaces, booksIn) => {
  const availableSpaces = spaces - booksIn;
  const fitPluralOrSingular = getPluralOrSingular(
    availableSpaces,
    "cabe",
    "cabem"
  );
  const bookPluralOrSingular = getPluralOrSingular(
    availableSpaces,
    "livro",
    "livros"
  );
  return `Só ${fitPluralOrSingular} mais ${availableSpaces} ${bookPluralOrSingular}`;
};

let booksBox = {
  spaces: 5,
  booksIn: 0,
  addBooks: (booksQuantity) => {
    let { spaces } = booksBox;
    const isBoxFilled = booksBox.booksIn === spaces;
    const boxSpacesAreNotEnough = booksBox.booksIn + booksQuantity > spaces;

    if (isBoxFilled) {
      return `A caixa já está cheia`;
    }

    if (boxSpacesAreNotEnough) {
      return getAvailableSpacesMessage(spaces, booksBox.booksIn);
    }

    booksBox.booksIn += booksQuantity;

    const bookPluralOrSingular = getPluralOrSingular(
      booksBox.booksIn,
      "livro",
      "livros"
    );
    return `Já há '${booksBox.booksIn}' ${bookPluralOrSingular} na caixa`;
  },
};

console.log("Inserção nº1:", booksBox.addBooks(1));
console.log("Inserção nº2:", booksBox.addBooks(2));
console.log("Inserção nº3:", booksBox.addBooks(3));
console.log("Inserção nº4:", booksBox.addBooks(1));
console.log("Inserção nº5:", booksBox.addBooks(2));
console.log("Inserção nº6:", booksBox.addBooks(1));
console.log("Inserção nº7:", booksBox.addBooks(1));
