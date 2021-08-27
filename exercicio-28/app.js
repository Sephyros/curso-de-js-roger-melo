/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    request.status === 200
      ? console.log(request.responseText)
      : console.log("Não foi possível obter os dados do pokémon");
  }
});
request.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
request.send();

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const personalInfo = {
  name: "Leonardo",
  surname: "Maciel",
  gender: "Male",
  age: 32,
  height: 1.78,
  weight: 74.6,
  isWalking: false,
  totalWalked: 25,
};

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

personalInfo.growUp = () => {
  personalInfo.age++;
};

for (let i = 0; i < 5; i++) {
  personalInfo.growUp();
}

/*
04

- Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
caminhados ao valor que foi recebido como parâmetro do método;
- Este método também deve modificar o boolean do objeto que indica se a 
pessoa representada pelo objeto está, ou não, andando;
- Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
método 4x, com diferentes metragens passadas por parâmetro.
*/

personalInfo.jog = (value = 0) => {
  personalInfo.totalWalked += value;
  personalInfo.isWalking = true;
};

personalInfo.jog(3);
personalInfo.jog(6);
personalInfo.jog(9);
personalInfo.jog(13);

/*
05

- Logo abaixo, adicione ao objeto um método que retorna a seguinte string:

'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
metros.'

- Antes de retornar a string, faça as seguintes validações:
- Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
por "a";
- Se a idade for 1, substitua "anos" por "ano", no singular;
- Se a quantidade de metros caminhados for 1, substitua "metros" por 
"metro", no singular.
*/

personalInfo.showInfo = () => {
  const { name, surname, gender, age, height, weight, totalWalked } =
    personalInfo;
  const fullName = name.concat(" ", surname);
  console.log(
    `Oi. Eu sou ${gender === "Male" ? "o" : "a"} ${fullName}, tenho ${age} ${
      age === 1 ? "ano" : "anos"
    }, ${height} metros de altura, peso ${weight} quilos e, só hoje, eu já caminhei ${totalWalked} ${
      totalWalked === 1 ? "metro" : "metros"
    }.`
  );
};

personalInfo.showInfo();

console.log(personalInfo);

/*
  06
  
  - Crie uma função que recebe um valor como argumento e retorna um boolean 
  indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
  - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
  valor truthy;
  - Faça isso até que 7 valores truthy sejam passados.
  */

const isTruthyOrFalsy = (value) => {
  console.log(`The value ${value}:${typeof value} is ${Boolean(value)}`);
};

const falsyValues = [undefined, 0, false, "", "", ``, null, NaN];
const truthyValues = [1, true, {}, [], " ", -7, () => {}, "false", "0"];

falsyValues.forEach((value) => isTruthyOrFalsy(value));
truthyValues.forEach((value) => isTruthyOrFalsy(value));

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

function books(bookName) {
  const books = {
    "Sapiens: Uma Breve História da Humanidade": {
      pageNumber: 464,
      author: "Yuval Noah Harari",
      publisher: "L&PM",
    },
    Kybalion: {
      pageNumber: 160,
      author: "Três Iniciados",
      publisher: "Arcanum Editora",
    },
    "O Guia Definitivo do Mochileiro das Galáxias": {
      pageNumber: 784,
      author: "Douglas Adams",
      publisher: "Editora Arqueiro",
    },
  };
  return books[bookName];
}
console.log(books("Kybalion"));
