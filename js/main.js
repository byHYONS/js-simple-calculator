// reset
'use strict'


// definisco una funzione per i bottoni numerici:
function numeri(){
    const bottoniNumerici = document.querySelectorAll('.num');
    console.log(bottoniNumerici);
    // per farmi restituire il valore di tutti i bottoni selezionati:
    for (let index = 0; index < bottoniNumerici.length; index++) {
        const button = bottoniNumerici[index];
        console.log(button);
        // per avere l'ascolto su tutti i bottoni selezionati:
        button.addEventListener('click', function() {
            const numero = parseInt(button.innerHTML);
            console.log(numero);
            return button
            
        })   
    }
} 
const cifraNumerica = numeri();
console.log(cifraNumerica);



// definisco una funzione per gli operatori:
function operatori(){
    const bottoniOperatori = document.querySelectorAll('.operator');
    console.log(bottoniOperatori);
    // per farmi restituire il valore di tutti i bottoni selezionati:
    for (let index = 0; index<bottoniOperatori.length; index++){
        const button = bottoniOperatori[index];
        // per avere l'ascolto su tutti i bottoni selezionati:
        button.addEventListener('click', function(){
            const operatore = button.innerHTML;
            console.log(operatore);
        })
    }

    switch (operatore){
        case '+':
            return +
        break;
        case '-':
            return -
        break;
        case 'x':
            return *
        break;
        case '':
            return +
        break;


    }

}

const operatore = operatori()
console.log(operatore);
