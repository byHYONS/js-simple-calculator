# ESERCIZIO: Simple Calculator

> [!NOTE]
>
> nome repo: js-simple-calculator

### Consegna:
Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.
**Attenzione:** la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.

#### MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto.

#### MILESTONE 2
Aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto.

#### MILESTONE 3
Aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto.

#### MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo.

#### BONUS
Verificare che non si stia cercando di dividere per 0.


### Svolgimento:
1. con l'event delegation leggo div padre e ho il risultato di tutti i bottoni, successivamente farò l'eventListener su di essi;
2. 