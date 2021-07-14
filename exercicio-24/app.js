/*
  01

  - Exiba no console um boolean indicando se o caractere ':' existe na string 
    abaixo.
*/

const message = "Próxima etapa: 10";
console.log(message.includes(":"));

/*
  02

  - Exiba no console um boolean indicando se o item '635' existe no array 
    abaixo.
*/

const numbers = [979, 2673, 41, 77, 276, 554, 399, 385, 65, 726, 635, 833, 462];
console.log(numbers.includes(635));

/*
  A partir daqui, vamos treinar nossas skills de refatoração.

  Antes de iniciar o refactoring abaixo, por precaução, versione (ou faça uma 
  cópia do) seu todo-list atual para que seja possível mais tarde voltar ao 
  estado em que ele está agora, se necessário.
*/

/*
  03

  - Refatore a implementação da remoção do to-do (li) da tela;
  - Tente implementar essa remoção sem "navegar pelo DOM" usando propriedades
    como a parentElement.
    
    Por que? 

    Se futuramente a marcação HTML da aplicação mudar, se o parentElement mudar, 
    o código que foi implementado na aula não funcionará.
*/

/* A questão é vaga para quem não conhece sobre as mudanças que poderiam acontecer
na marcação... será que poderá remover o ícone? a lista não seria mais uma UL
com LIs? ou talvez apenas os SPAN saíssem? no meu ponto de vista é impossível
fazer uma implementação que sobreviva a todas mudanças possíveis no DOM. e mesmo
considerando que apenas o UL/LI/ICONE se manteriam, não consigo imaginar um
método que não tenha de percorrer todo dom.
Resumindo: Não irei mais tentar resolver. Não estou desistindo, apenas
valorizando meu tempo evitando procurar soluções milagrosas. */

/*
  04

  Algumas sugestões de refactoring
  
  - Isole em funções de responsabilidade única:
    - O código que adiciona os to-dos;
    - O código que filtra e adiciona as classes CSS nos to-dos.
*/

// Ainda tenho dificuldades em decifrar até que ponto devo isolar as funções para equilibrar legibilidade com manutenibilidade...
