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

var risultato = subtraction(100, 31);
var risultato1 = sum(60, 9);
var risultato2 = multiplier(7, 10);
var risultato3 = divider(70, 7);

// console.log("dopo la funzione");
