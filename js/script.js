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
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…



// Recap funzioni
// 1 = cosa sono
// 2 = quando servono
// 3 = come usarle
// DRY - don't repeat yourself
// dopo il nome della funzione c'è una parentesi: nella parentesi mettiamo qualcosa per poter portare qualcosa che stava IN GLOBLE (fuori dalla funzione) dentro la funzione (passiamo l'argomento)

// dichiarazione della funzione

function subtraction (firstNumber, secondNumber) {
  var result = firstNumber - secondNumber;
  console.log("Subtraction exercise", result);
  return result;
}

function sum (firstNumber, secondNumber) {
  var result = firstNumber + secondNumber;
  console.log("Sum exercise", result);
  return result;
}

function multiplier (firstNumber, secondNumber) {
  var result = firstNumber * secondNumber;
  console.log("Multiplier exercise", result);
  return result;
}

function divider (nominatore, denominatore) {
  var result = nominatore / denominatore;
  console.log("Divider exercise", result);
  return result;
}

// esecuzione

// console.log("prima della funzione");

var menus = subtraction(100, 31);
var plus = sum(60, 9);
var times = multiplier(7, 10);
var dividedBy = divider(70, 7);

// console.log("dopo la funzione");
