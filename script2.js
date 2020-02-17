const name = prompt('Welkom, wat is je naam?', 'naam');
document.write('Hey ' + name + '!');

// const userMin = 0;
// const userMax = 25;
let counter = 1;
const maxTries = 5;

// prompt user to define numbers
const userMin = prompt(
  'Hey ' +
    name +
    '!' +
    ' Voer een nummer X in om van X tot Y te beginnen met raden'
);

console.log(userMin);

const userMax = prompt(
  'Hey ' +
    name +
    '!' +
    ' Voer een nummer Y in om van ' +
    userMin +
    ' tot Y te beginnen met raden'
);
console.log(userMax);

let userMinInt = parseInt(userMin);
let userMaxInt = parseInt(userMax);

// const randomNumber = function(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
// };

// randomNumber(userMin, userMax);

// create a random number
const randomNumber =
  Math.floor(Math.random() * (userMaxInt - userMinInt)) + userMinInt;
console.log(randomNumber);
// prompt the user and ask them to gues a number between 1 and X

let attempts = prompt(
  'Hey ' +
    name +
    '!' +
    ' Voer een nummer in van ' +
    userMin +
    ' tot ' +
    userMax +
    ' om te beginnen met raden'
);

// is inserted in while loop to keep asking again while number is not guessed correctly.

// check to see if guess is correct
while (attempts != randomNumber) {
  alert('Dat is niet correct');
  alert('je hebt nog ' + (maxTries - counter) + ' pogingen over.');
  let attempts = prompt('Raadt het nummer van ' + userMin + ' tot ' + userMax);
  counter += 1;

  if (counter > maxTries - 1) {
    document.write(
      'Je hebt geen pogingen meer over. Ververs de pagina om opnieuw te beginnen.'
    );
    break;
  }

  if (attempts == randomNumber) {
    alert('Gefeliciteerd! U heeft gewonnen');
    document.write(
      '<p> Het juiste nummer was ' +
        randomNumber +
        '. Je hebt het in ' +
        counter +
        ' pogingen geraden. </p>'
    );
    document.write('<p> Dag ' + name + '. Tot de volgende keer! </p>');
    break;
  }
}

console.log('program complete');
