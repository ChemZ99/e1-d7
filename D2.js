/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("---------- esercizio 1");
const num1 = 30;
const num2 = 50;
if (num1 > num2) {
  console.log("il numero piu' alto e' ", num1);
} else {
  console.log("il numero piu' alto e' ", num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("---------- esercizio 2");
const num3 = 7;
if (num3 === 5) {
  console.log("il numero e' uguale a 5");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("---------- esercizio 3");
const num4 = 55;
if (num4 % 5 === 0) {
  console.log("il numero e' divisibile per 5");
} else {
  console.log("il numero non e' divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("---------- esercizio 4");
const num5 = 20;
const num6 = 12;
if (num5 === 8) {
  console.log("il primo numero dato e' uguale a 8");
} else if (num6 === 8) {
  console.log("il secondo numero dato e' uguale a 8");
} else if (num5 + num6 === 8) {
  console.log("la somma dei due numeri e' uguale a 8");
} else if (num5 - num6 === 8) {
  console.log("la differenza dei due numeri e' uguale a 8");
} else {
  ("error 500");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("---------- esercizio 5");
let totalShoppingCart = 48;
if (totalShoppingCart < 50) {
  console.log("l' ammontare totale e' di", totalShoppingCart + 10);
} else {
  console.log("l' ammontare totale e' di", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("---------- esercizio 6");
totalShoppingCart = 100;
if (totalShoppingCart * 0.8 < 50) {
  console.log("l' ammontare totale e' di", totalShoppingCart * 0.8 + 10);
} else {
  console.log("l' ammontare totale e' di", totalShoppingCart * 0.8);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("---------- esercizio 7");
let num7 = 99;
let num8 = 23;
let num9 = 64;
if (num7 > num8 && num8 > num9) {
  console.log("ordine decrescente dei numeri ", num7, num8, num9);
} else if (num7 > num9 && num9 > num8) {
  console.log("ordine decrescente dei numeri ", num7, num9, num8);
} else if (num8 > num7 && num7 > num9) {
  console.log("ordine decrescente dei numeri ", num8, num7, num9);
} else if (num8 > num9 && num9 > num7) {
  console.log("ordine decrescente dei numeri ", num8, num9, num7);
} else if (num9 > num7 && num7 > num8) {
  console.log("ordine decrescente dei numeri ", num9, num7, num8);
} else if (num9 > num8 && num8 > num7) {
  console.log("ordine decrescente dei numeri ", num9, num8, num7);
} else if (num7 === num8 || num7 === num9 || num8 === num9) {
  console.log("HOUSTON! abbiamo dei numeri uguali!");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("---------- esercizio 8");
let falsenum = "troll";
if (typeof falsenum === "number") {
  console.log("il valore fornito e' un numero");
} else {
  console.log("il valore fornito non e' un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("---------- esercizio 9");
let num10 = 77;
if (num10 % 2 === 0) {
  console.log(num10, " e' divisibile per 2");
} else {
  console.log(num10, " non e' divisibile per 2");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("---------- esercizio 10");
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

console.log("---------- esercizio 11");
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("---------- esercizio 12");
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("---------- esercizio 13");
let trashbin;
trashbin = me["skills"].pop();
console.log(trashbin, "voce eliminata");
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("---------- esercizio 14");
const numericArray = [];
console.log(numericArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), "aggiungo i valori");
console.log(numericArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("---------- esercizio 15");
console.log(numericArray.pop(), "elimino l' ultimo valore");
console.log(numericArray.push(100), "aggiungo il valore 100");
console.log(numericArray);
