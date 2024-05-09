// reset
'use strict';

// salvo in variabili elementi che mi servono per far funzionare la calcolatrice:
const display = document.querySelector('.display span');
const canc = document.querySelector('.canc')
const uguale = document.querySelector('.equals');
let primoOperatore = null;
let secondoOperatore = null;


// definisco una funzione per leggere i bottoni numerici:
function ascoltonBottoniNumeri(){
    const bottoniNumerici = document.querySelectorAll('.num');
    // per farmi restituire il valore di tutti i bottoni selezionati:
    for (let index = 0; index < bottoniNumerici.length; index++) {
        const button = bottoniNumerici[index];
        // per avere l'ascolto su tutti i bottoni selezionati:
        button.addEventListener('click', function() {
            const numero = parseInt(button.textContent);
            aggiornaDisplay(numero);
            calcolaOperazione(numero);
            console.log(numero);
        })   
    }
} 


// // definisco una funzione per leggere gli operatori:
function ascoltonBottoniOperatore(){
    const bottoniOperatori = document.querySelectorAll('.operator');
    // per farmi restituire il valore di tutti i bottoni selezionati:
    for (let index = 0; index<bottoniOperatori.length; index++){
        const button = bottoniOperatori[index];
        // per avere l'ascolto su tutti i bottoni selezionati:
        button.addEventListener('click', function(){
            const operatore = button.textContent;
            convertiOperatore(operatore)
            aggiornaDisplay(operatore);
            calcolaOperazione(operatore)
            console.log(operatore);
        })
    }
}

 // funzione per le operazioni:
 function calcolaOperazione(input){
    const valoreCorrente = parseInt(display.textContent);

    if (input === '+' || input === '-' || input === '*' || input === '/'){
        primoOperatore = valoreCorrente;
    
    }
    // if (primoOperatore === null && !isNaN(input)){    
    // }
 }



// funzione per ripulire il display:
function clearDisplay(){
    canc.addEventListener('click', function(){
        display.textContent = 0;
    })
}



// Funzione per aggiornare il display della calcolatrice
function aggiornaDisplay(input) {
    if (input === '-' || input === '-' || input === 'x' || input === '/') {
        display.textContent = 0;

    } else {
        display.textContent += input; // Aggiunge l'input al display corrente
    }
    console.log(display.textContent); // Per debugging
}

// Funzione per inizializzare la calcolatrice

    ascoltonBottoniNumeri();
    ascoltonBottoniOperatore();
    clearDisplay()

// Chiamata della funzione di inizializzazione al caricamento della pagina
// document.addEventListener('DOMContentLoaded', inizializzaCalcolatrice);

//trasforma gli operatori:
function convertiOperatore(operatore){
    switch (operatore){
        case '&plus;':
            return '+';

        case '&minus;':
            return '-';

        case '&times;':
            return '*';

        case '&divide;':
            return '/';
        
        default:
            return '';
    }
}
