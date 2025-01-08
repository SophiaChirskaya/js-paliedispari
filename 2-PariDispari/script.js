// Creo la funzione per generare un numero random tra 1 e 5
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// Creo la funzione per verificare se un numero è pari o dispari
function verificaPariDispari(numero) {
    return numero % 2 === 0 ? "pari" : "dispari";
}

// Chiedo l'utente di scegliere pari o dispari
let sceltaUtente = prompt("Scegli: 'pari' o 'dispari'").toLowerCase();


// L'utente inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


// Generazione di un numero casuale per il computer
let numeroComputer = generaNumeroRandom();
console.log(`Il numero scelto dal computer è: ${numeroComputer}`);

// Calcolo la somma dei due numeri
let somma = numeroUtente + numeroComputer;
console.log(`La somma dei numeri è: ${somma}`);

// Verifico se la somma è pari o dispari
let risultato = verificaPariDispari(somma);
console.log(`La somma è ${risultato}`);

// Determina il vincitore
if (sceltaUtente === risultato) {
    console.log("Complimenti! Hai vinto!");
} else {
    console.log("Mi dispiace, ha vinto il computer.");
}
