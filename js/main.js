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
let risultatoTotale = 0;

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
        console.log('primo operatore salvato ' + primoOperatore);
        console.log('secondo operatore salvato ' + secondoOperatore);   
        
    });
}

// INPORTO IL VALORE E SALVO SULL'ARREY:
function numeroDigitato(input){
    const valoreCorrente = parseInt(input);

    if (!isNaN(input)) cifraCorrente.push(valoreCorrente);
    if (cifraCorrente[0] === 0 && cifraCorrente.length > 1) cifraCorrente.shift();

    console.log({cifraCorrente});
    
    // invoco la funzione schermo passando come argomento il valore corrente:
    schermo(valoreCorrente);  

}


/* ************************************
      GESTIONE DELLA CALCOLATRICE
************************************ */

// IMPORTO IL VALORE DELL'OPERATORE SALVO L'ARREY DI NUMERI SUL PRIMO OPERATORE E CANCELLO L'ARREY:
function operatoreDigitato(input){
    // se l'evento ascoltato è un operatore svolgo delle azioni:
    if (input === '+' || input === '-' || input === '*' || input === '/' ) {
        primoOperatore = (risultatoTotale !== 0) ? risultatoTotale : cifraCorrente.join('');
        cifraCorrente = [];
        operatoreMatematico = input;
    }

}

// IMPORTO IL VALORE DELL'UGUALE E SALVO I NUMERI DELL'ARREY NEL SECONDO OPERATORE, INVOCO LA FUNZIONE CALCOLO RISULTATO:
function risultatoDigitato(input){
    
    // se l'input ascoltato è l'uguale svolgo delle azioni:
    if (input === '=') {
        secondoOperatore = cifraCorrente.join('');
        console.log(secondoOperatore);
        cifraCorrente = [];
        
    }

    // invoco la funzione per calcolare il risultato:
    calcolaRisultato(input)
}


/* ************************************
            CALCOLO RISULTATO
************************************ */

// FUNZIONE PER IL CALCOLO DEL RISULTATO:
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
    risultatoTotale = parseInt(displayCalcolatrice.textContent)
}


/* ************************************
            DISPLAY & DELETE
************************************ */

// FUNZIONE PER GESTIRE IL DISPLAY DELLA CALCOLATRICE:
function schermo(input){
    const cifraNumerica = cifraCorrente.join('');

    // in base a delle possibili situazioni mando a chermo valori diversi:
    if (input.length === 0){
        displayCalcolatrice.textContent = 0;
    } else if (cifraNumerica.length > 11) {
        displayCalcolatrice.textContent = cifraNumerica + ' e';
    } else if (isNaN(input)){
        // non fare niente...
    } else {
        displayCalcolatrice.textContent = cifraNumerica;
    }

}

// IMPORTO IL VALORE DEL CANC PER CANCELLARE IL DISPLAY:
function cancellaDigitato(input){
    // console.log('sono un cancellatore ' + input);
    if (input === 'delete') {
        displayCalcolatrice.textContent = 0;
        cifraCorrente = [];
        primoOperatore = 0;
        secondoOperatore = 0;
        risultatoTotale = 0;
        operatoreMatematico = undefined;
    }
}

/* ************************************
            COALCOLATRICE
************************************ */

// INVOCO IL PROGRAMMA:
calcolatriceMain();

/* ***************
       FINE
**************** */

