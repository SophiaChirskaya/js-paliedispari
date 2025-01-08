

let parola = prompt ("Inserisci una parola");




function revertaParola(stringa) {

    let parolaRevertata = "";

    for (let i = stringa.length - 1; i >= 0; i--) {
        let carattereIesimo = stringa.charAt(i);

        console.log(carattereIesimo);

        parolaRevertata = parolaRevertata + carattereIesimo;
        
    }

    return parola === parolaRevertata
}

let parolaInvertita = revertaParola(parola);
console.log ("Parola invertita è un palindromo?:", parolaInvertita);
alert("Parola invertita è un palindromo?:" + parolaInvertita);