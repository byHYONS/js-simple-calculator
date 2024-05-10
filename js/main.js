// reset
'use strict';

// salvo in variabili elementi che mi servono per far funzionare la calcolatrice:
let primoOperatore = null;
let secondoOperatore = null;
let cifraCorrente = [];
console.log(cifraCorrente);

const displayCalcolatrice = document.querySelector('.display span');
const bottoni = document.querySelector('.btn-calcolator');



// faccio l'ascolto su tutti i bottoni
bottoni.addEventListener('click', function(e){
    const numero = e.target.dataset.number;
    const operatore = e.target.dataset.operator
    const uguale = e.target.dataset.equals
    const cancella = e.target.dataset.canc;

    numeroDigitato(numero);
    operatoreDigitato(operatore);
    risultatoDigitato(uguale);
    cancellaDigitato(cancella);
    



    
})



// importo il valore numerico dall'event listener:
function numeroDigitato(input){
    console.log('sono un numero ' + input);
    const valoreCorrente = parseInt(input);
    console.log(valoreCorrente);

    const controlloZero = [];
    if (!isNaN(valoreCorrente)) controlloZero.push(valoreCorrente);
    console.log({controlloZero});


    // if (!isNaN(input)) cifraCorrente.push(valoreCorrente);
    if (controlloZero[0] !== 0) cifraCorrente.push(controlloZero);

    console.log(cifraCorrente);
    schermo(valoreCorrente);

    

}




// importo il valor dell'operatore dall'event listener:
function operatoreDigitato(input){
    console.log('sono un operatore ' + input);


}





// importo il valore dell'uguale dall'event listener:
function risultatoDigitato(input){
    console.log('sono un risultato ' + input);

}





// importo il valore del cancella dall'event listener:
function cancellaDigitato(input){
    console.log('sono un cancellatore ' + input);
    if (input === 'delete') {
        displayCalcolatrice.textContent = 0;
        cifraCorrente = [];
    }


}



// creo funzione per il display:
function schermo(input,){
    const cifraNumerica = cifraCorrente.join('');

    cancellaDigitato()
    console.log({input});
    let digita = true;
    if (input.length === 0){
        displayCalcolatrice.textContent = 0;
    } else if (cifraNumerica.length > 11) {
        displayCalcolatrice.textContent = cifraNumerica + ' e';
    } else {
        displayCalcolatrice.textContent = cifraNumerica;
    }
}








// const bottoneCanc = document.querySelector('.canc')
// const bottoneUguale = document.querySelector('.equals');








// // definisco una funzione per leggere i bottoni numerici:
// function ascoltonBottoniNumeri(){
//     const bottoniNumerici = document.querySelectorAll('.num');
//     // per farmi restituire il valore di tutti i bottoni selezionati:
//     for (let index = 0; index < bottoniNumerici.length; index++) {
//         const button = bottoniNumerici[index];
//         // per avere l'ascolto su tutti i bottoni selezionati:
//         button.addEventListener('click', function() {
//             const numero = parseInt(button.textContent);
//             aggiornaDisplay(numero);
//             calcolaOperazione(numero);
//             console.log(numero);
//         })   
//     }
// } 


// // // definisco una funzione per leggere gli operatori:
// function ascoltonBottoniOperatore(){
//     const bottoniOperatori = document.querySelectorAll('.operator');
//     // per farmi restituire il valore di tutti i bottoni selezionati:
//     for (let index = 0; index<bottoniOperatori.length; index++){
//         const button = bottoniOperatori[index];
//         // per avere l'ascolto su tutti i bottoni selezionati:
//         button.addEventListener('click', function(){
//             const operatore = button.textContent;
//             convertiOperatore(operatore)
//             aggiornaDisplay(operatore);
//             calcolaOperazione(operatore)
//             console.log(operatore);
//         })
//     }
// }

//  // funzione per le operazioni:
//  function calcolaOperazione(input){
//     let valoreCorrente;
//     if (input !== clearDisplay()) {
//         cifraCorrente.push(input);
//         valoreCorrente = parseInt(cifraCorrente.join(''));
//         } else {
//             valoreCorrente = 0;
            
//     }

//     console.log(valoreCorrente);

    
//     }
    


 
 
 
//  // Funzione per aggiornare il display della calcolatrice
//  function aggiornaDisplay(input) {
//      // if (input === '-' || input === '-' || input === 'x' || input === '/') {
//          //     display.textContent = 0;
//          calcolaOperazione(input);
//          // } else {

//              // Aggiunge l'input al display corrente
             
             
//              //}
//              console.log(display.textContent); // Per debugging
//             }



            
// // funzione per ripulire il display:
// function clearDisplay(){
//     canc.addEventListener('click', function(){
//         display.textContent = 0;
//         calcolaOperazione()
//     })
// }
//             // Funzione per inizializzare la calcolatrice

//     ascoltonBottoniNumeri();
//     ascoltonBottoniOperatore();
//     clearDisplay()

// Chiamata della funzione di inizializzazione al caricamento della pagina
// document.addEventListener('DOMContentLoaded', inizializzaCalcolatrice);

