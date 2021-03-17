// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… (WHILE)

// -------------------------------------------------------------

// function numberGeneratorPc (min, max) { // this will generate numbers, I define a min and max so I can re-use the function with different numbers (not just from 1 to 100).
//   var minRnd = min;
//   var maxRnd = max - minRnd + 1;
//   var randomNumber = Math.floor(Math.random() * maxRnd) + minRnd;
//   return randomNumber;
// }
//
// var numPcContainer = []; // because the generated numbers cannot be repeated we gotta create an empty array in which to put those very numbers.
//
// // HERE I SHOULD PUT WHILE
// for (i = 0; i < 16; i++) { // then I tell the pc to repeat the random number genetator for 16 times.
//   var pcRndNumber = numberGeneratorPc(1, 100); // telling it to start from 1 and ending at 100.
//   var checkNumberPc = numPcContainer.includes(pcRndNumber); // then I use the "includes" function to make him go check into the array if the number generator (repeated 16 times) is there or not (true if present, false if not).
//   numPcContainer.push(pcRndNumber); // here I force this value INTO the array
//
//   if (checkNumberPc == true) {
//     console.log('value repeated');
//
//   } else {
//     console.log('value NOT repeated', false);
//
//   }
//
//   console.log(pcRndNumber, checkNumberPc);
// }

// -------------------------------------------------------------


























// CAMPO minato

// var numero totale di caselle = 100;

// funzione startGame();

// genera bombe (16)
// [15, 45, 34, 78, 1, 12..........]

// numeri scelti dall'utente [] (fare un secondo array per tutti i numeri scelti dall'utente)

// ciclo (while)

  // chiedere un numero all'utente
  // 45

  // IF questo numero NON me lo ha già dato? SI (allora si attiva il codice sotto prima dell'else)

    // IF il numero corrisponde ad una bomba?
    // si = game over;
    // break (interrompe il gioco)
    // ELSE
    // no = 45 lo pusherò nell'array dei numeri dell'utente (secondo array)

  // ELSE (nel caso in cui il numero dato dall'utente si ripetesi ripete)

// fine ciclo

// array di numeri
//
//
//
// function startGame () {
//
//   var bombe = generaBombe(16);
//   console.log(bombe);
//   var numeriUtente = [];
//
//   while (numeriUtente.length < (100 - 16)) {
//
//     var num = parseInt(prompt('dimmi un numero'));
//     console.log(num);
//
//     if ( inArray(numeriUtente, num)) {
//       // non fare niente
//       console.log('hai già inserito questo numero');
//     } else {
//
//       numeriUtente.push(num);
//
//       if ( inArray (bombe, num)) {
//         console.log("sei morto");
//       } else {
//         console.log("push" + num);
//       }
//     }
//
//
//   }
//
//   console.log(num);
//   console.log(bombe);
//   console.log(numeriUtente);
// }
//
//
//
//
//
//
// //
// // function generaBombe() {
// //   var bombe = [];
// //   // ciclo (finchè la lunghezza dell'array "bombe" non sarà uguale al numero di bombe da generare);
// //
// //     // genera numero random e pusha in array "bombe".
// //
// //
// //     // return array
// //
// //     // fine ciclo
// // }
//
// function inArray(array,value) {
//   // controllo parametri;
//   value = parseInt(value);
//   var bool = array.includes(value);
//   // if (bool == true) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return bool;
// }
//
// // var esito = inArray([15, 2], 2);
// // console.log(esito);
//
// function generaBombe(num) {
//   var bombe = [];
//   for (var i = 0; i < num; i++) {
//     var n = getRandom(1, 100);
//     console.log(i, n, bombe.length);
//   }
//
//   while (bombe.length < num) {
//     var n = getRandom(1, 100);
//     console.log(n, bombe.length);
//
//     if ( inArray(bombe, n) ) {
//       // non faccio niente
//     } else { // senno lo pusho ell'array
//       bombe.push(n);
//     }
//   }
//
//   return bombe;
// }
//
// // var bombe = generaBombe(61);
// // console.log(bombe);
//
// function getRandom (min, max) {
//   var rnd = Math.random() * (max - min);
//   var rnd = Math.floor(rnd) + min + 1;
//   return rnd;
// }
//
// console.log(getRandom(1, 100));














function getRandomValue(min, max) {
  var localMin = min;
  var localMax = max - min + 1;

  return Math.floor(Math.random() * localMax) + localMin;
}

function getRandomArray() {
  var arr = [1, 2, 3];

  while (arr.length < 16) {

    var rnd = getRandomValue(1, 100);
    if (!randomValues.includes(rnd)) {
      randomValues.push(rnd);
    }
  }

  return randomValues;
}

function playGame(randomValues) {
  var requestedValue = 100 - randomValues.length;

  var userValues = [];

  while (userValues.length < requestedValue) {

    var newValue = parseInt(prompt('Dammi numero'));

    if (newValue < 1 || newValue > 100 || userValue.includes(newValue)) {
      console.log('Valore non utilizzabile. Si prega di riprovare');
    } else {

      if (randomValues.includes(newValue)) {
        console.log('end of game');

      } else {
        userValues.push(newValue);
      }
    }
  }
  console.log(userValues);
}

function init() {
  var pcValues = getRandomArray();
  console.log('pc values', pcValues);
  var res = playGame(pcValues);
  if (res) {
    console.log('hai vinto');

  } else {
    console.log('hai perso');
  }

}

init();



































// Recap funzioni
// 1 = cosa sono
// 2 = quando servono
// 3 = come usarle
// DRY - don't repeat yourself
// dopo il nome della funzione c'è una parentesi: nella parentesi mettiamo qualcosa per poter portare qualcosa che stava IN GLOBLE (fuori dalla funzione) dentro la funzione (passiamo l'argomento)

// dichiarazione della funzione

// function subtraction (firstNumber, secondNumber) {
//   var result = firstNumber - secondNumber;
//   console.log("Subtraction exercise", result);
//   return result;
// }
//
// function sum (firstNumber, secondNumber) {
//   var result = firstNumber + secondNumber;
//   console.log("Sum exercise", result);
//   return result;
// }
//
// function multiplier (firstNumber, secondNumber) {
//   var result = firstNumber * secondNumber;
//   console.log("Multiplier exercise", result);
//   return result;
// }
//
// function divider (nominatore, denominatore) {
//   var result = nominatore / denominatore;
//   console.log("Divider exercise", result);
//   return result;
// }
//
// // esecuzione
//
// // console.log("prima della funzione");
//
// var menus = subtraction(100, 31);
// var plus = sum(60, 9);
// var times = multiplier(7, 10);
// var dividedBy = divider(70, 7);

// console.log("dopo la funzione");
