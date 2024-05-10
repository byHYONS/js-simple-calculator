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
1. dichiaro le variabili che mi serviranno per l'esecuzione del programma;

2. definisco la funzione principale;

3. con l'event delegation leggo div padre e ho il risultato di tutti i bottoni, successivamente farò l'eventListener su di essi;

4. all'interno della funzione generale definisco 4 funzioni con l'argomento dell'event listener:
```
numeroDigitato(numero);
operatoreDigitato(operatore);
risultatoDigitato(uguale)
cancellaDigitato(cancella);
```

5. in `numeroDigitato()` importo il valere dell'ascolto come parametro e in caso il parametro è un numero salvo sull'arrey `cifraCorrente`, se il primo numero è zero, lo cancello dall'arrey:
```
    if (cifraCorrente[0] == 0 && cifraCorrente.length > 1) cifraCorrente.shift();

```
Inoltre invovo la finzione `schermo()` passando come argomento `valoreCorrente`;

6. con `operatoreDigitato()` importo il valore dell'operatore, tramite istruzione condizionale se l'input è `+, -, *, /` salvo il contenuto dell'arrey nella variabile `primoOperatore` e cancello l'arrey `cifraCorrente`, salvo anche l'operatore nella varia variabile `operatoreMatematico`;

7. con `rusultatoDigitato()` importo il valore dell'uguale e tramite istrizione condizionale se l'input è `=` salvo larrey `cifraCorrente` nella variabile `secondoOperatore`,
all'interno evoco la funzione `calcolaRisultato` passando come argomento l'input `=`;

8. con `calcolaRisultato()` ho il paremetro dell'`=` e per mezzo di esso e con l'`operatoreMatematico` tramite `switch` pongo i `case` delle 4 operazione con relativo calcolo e stampa a schermo del risultato. Inoltre gestisco l'eventuale divisione con lo `0` dando come risultato `error`;

9. in `schermo()` che ha come parametro il `valoreCorrente`, viene gestito lo schermo della calcolatrice. Tramite una istruzione condizionale gestisco nel caso il valore sia `input === 0` verrà mandato a schermo lo `0`, nel caso le cifra fossero superiori a 11 cifre riportare il numero mettendo a fine riga la lettera `e`, in caso il valore digitato sia un `isNaN` non digitare niente, per tutti gli altri casi riportare il `valoreCorrente`;

10. nella funzione `cancellaDigitato()`, nel caso venga premuto `C`, viene cancellato sia l'arrey `cifraCorrente` sia lo schermo.

##### FINE
