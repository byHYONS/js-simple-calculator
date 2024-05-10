// reset
'use strict';

/* ************************************
            VARIABILI
************************************ */

// salvo in variabili elementi che mi servono per far funzionare la calcolatrice:
let primoOperatore;
let secondoOperatore;
let cifraCorrente = [];
let operatoreMatematico;
let risultatoCalcolato;

const displayCalcolatrice = document.querySelector('.display span');
const bottoni = document.querySelector('.btn-calcolator');


/* ************************************
            LOGICA PRINCIPALE
************************************ */

// FUNZIONE PRINCIPALE:
function calcolatriceMain(){

    // faccio l'ascolto su tutti i bottoni
    bottoni.addEventListener('click', function(e){
        const numero = e.target.dataset.number;
        const operatore = e.target.dataset.operator;
        const uguale = e.target.dataset.equals;
        const cancella = e.target.dataset.canc;

        // invoco funzioni
        numeroDigitato(numero);

        operatoreDigitato(operatore);

        risultatoDigitato(uguale)

        cancellaDigitato(cancella);

        console.log('sono la cifra ' + cifraCorrente);
        console.log('ho salvato il ' + primoOperatore);
        console.log('ho salvato il ' + secondoOperatore);   
        
    });
}



// INPORTO IL VALORE E SALVO SULL'ARREY:
function numeroDigitato(input){
    const valoreCorrente = parseInt(input);;

    if (!isNaN(input)) cifraCorrente.push(valoreCorrente);
    if (cifraCorrente[0] == 0 && cifraCorrente.length > 1) cifraCorrente.shift();

    console.log({cifraCorrente});
    schermo(valoreCorrente);  

}




// IMPORTO IL VALORE
function operatoreDigitato(input){
    
    if (input === '+' || input === '-' || input === '*' || input === '/' ) {
        primoOperatore = cifraCorrente.join('');
        cifraCorrente = [];
        operatoreMatematico = input;
        console.log({operatoreMatematico});
    }


}





// importo il valore dell'uguale dall'event listener:
function risultatoDigitato(input){
    
    // salvo il l'arrey nella variabile secondo operatore:
    if (input === '=') {
        secondoOperatore = cifraCorrente.join('');
        console.log(secondoOperatore);

    }

    // invoco la funzione per calcolare il risultato:
    calcolaRisultato(input)
}


// funzione per calcolare il risultato:
function calcolaRisultato(input){
    switch (true){
        case input === '=' && operatoreMatematico === '+':
            risultatoCalcolato = parseInt(primoOperatore) + parseInt(secondoOperatore);
            displayCalcolatrice.textContent = risultatoCalcolato;
            break;
        case input === '=' && operatoreMatematico === '-':
            risultatoCalcolato = parseInt(primoOperatore) - parseInt(secondoOperatore);
            displayCalcolatrice.textContent = risultatoCalcolato;
            break;
        case input === '=' && operatoreMatematico === '*':
            risultatoCalcolato = parseInt(primoOperatore) * parseInt(secondoOperatore);
            displayCalcolatrice.textContent = risultatoCalcolato;
            break;
        case input === '=' && operatoreMatematico === '/':
            if (parseInt(secondoOperatore) === 0) {          // gestisco l'eventuale divisione per 0 dando l'errore
                displayCalcolatrice.textContent = 'error';
            } else {
                risultatoCalcolato = parseInt(primoOperatore) / parseInt(secondoOperatore);
                displayCalcolatrice.textContent = risultatoCalcolato;
            }
            break;
    }
}


// creo funzione per il display:
function schermo(input){
    const cifraNumerica = cifraCorrente.join('');

    // cancellaDigitato()
    // console.log({input});
    if (input.length === 0){
        displayCalcolatrice.textContent = 0;
    } else if (cifraNumerica.length > 11) {
        displayCalcolatrice.textContent = cifraNumerica + ' e';
    } else if (isNaN(input)){
        // non fare niente...
    } else {
        displayCalcolatrice.textContent = cifraNumerica;
        // console.log(cifraNumerica);
        // console.log(cancellaDigitato);
    }
}

// importo il valore del cancella dall'event listener:
function cancellaDigitato(input){
    // console.log('sono un cancellatore ' + input);
    if (input === 'delete') {
        displayCalcolatrice.textContent = 0;
        cifraCorrente = [];
    }
}

calcolatriceMain();

// FINE





