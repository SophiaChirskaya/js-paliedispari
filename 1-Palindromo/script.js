// Richiedo input utente

let parola = prompt ("Inserisci una parola");


// Creo funzione per invertire la parola inserita

function revertaParola(stringa) {

    let parolaRevertata = "";

    for (let i = stringa.length - 1; i >= 0; i--) {
        let carattereIesimo = stringa.charAt(i);

        console.log(carattereIesimo);
// Costruisco la parola invertita
        parolaRevertata = parolaRevertata + carattereIesimo;
        
    }
// Confronto la parola originale con quella invertita
    return parola === parolaRevertata
}

let parolaInvertita = revertaParola(parola);
console.log ("Parola invertita è un palindromo?:", parolaInvertita);
alert("Parola invertita è un palindromo?:" + parolaInvertita);