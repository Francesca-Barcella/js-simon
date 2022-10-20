/************************************************** 
TRACCIA

Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.


//alert('ciao, funziona!');

// 1° Visualizzare in pagina 5 numeri casuali 
// - creare elemento in dom
// - selezionare elemento della dom in js
// - generare 5 numeri casuali math random
// - stampare i numeri nel dom
// 2° Da lì parte un timer di 30 secondi.
// - creare elemento in dom per il timer
// - selezionare elemento della dom in js
// - setInterval per creare il timer di 30 secondi
// - stampare il timer nel dom
// 3° Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
// - far sparire i numeri ... come?
// - chiedere all'utente quali numeri si ricorda UNO ALLA VOLTA!!! 
//   (prompt + ciclo, già visto in un esercizio, cercare)
// 3° il software dice quanti e quali dei numeri da indovinare sono stati individuati
// - e qui mi vien da ridere... 

// 1° Visualizzare in pagina 5 numeri casuali 
const containerNumber = document.querySelectorAll('.container_number');
console.log(containerNumber);

const containerTimer = document.querySelectorAll('.container_timer');
console.log(containerTimer); 


 const numbers = [];
while (numbers.length < 6) {
    const number = Math.floor(Math.random() * 100) + 1;
    if (numbers.indexOf(number) === -1) numbers.push(number);
}
console.log('elenco numeri ' + numbers);


function generateRandomNumberList() {
    const numbers = [];
    while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 100) + 1;

        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    console.log('elenco dei numeri random: ' + numbers);
    return numbers;
}

const mieiNumeri = generateRandomNumberList();
console.log(mieiNumeri);



pane    [0]
pasta   [1]
farina  [2]
cacao   [3]


// mele

 function checkInArray(list, item) {

    for (let i = 0; i < list.length; i++) {
        const currentItem = list[i];
        if (currentItem === item) {
            return true;
        }
    }

    return false;
} 

***************************************************/

// AVVISO PER RICCARDO SE PASSI DI QUI:
// ho fatto una zoom con Donato perchè mi incarto ancora troppo sulle funzioni, alla fine mi ha consigliato di stoppare l'esercizio e fare un po' di prove solo con le funzioni e quindi vedrai solo funzioni da qui in poi.

// CREARE LA FUNZIONE DI UNA SOMMA DI DUE NUMERI
// - definire i due numeri
const first_number = 20;
console.log('(1) il primo numero è: ' + first_number);
const second_number = 37;
console.log('(2) il secondo numero è: ' + second_number);


//mi serve sicuramente una funzione con due parametri
function sum(num_1, num_2) {
    //dentro dovrò eseguire la somma dei due parametri
    somma = num_1 + num_2;
    console.log(somma);
}

//evoco la funzione e assegno i due valori da inserire al posto dei parametri
sum(first_number, second_number);

console.log('');

/* NEW FUNCTION ****************************************************************************/
// CREARE LA FUNZIONE DI UNA STRINGA CHE RESTITUISCE DUE PAROLE - versione 1
const first_word = 'buongiorno';
const second_word = 'buonasera';

function wordString_1(word_1, word_2) {
    first_string = word_1;
    second_string = word_2;

    console.log('parola 1 e 2: ' + first_string, second_string);
}

wordString_1(first_word, second_word);

console.log('');

/* NEW FUNCTION ****************************************************************************/
// CREARE LA FUNZIONE DI UNA STRINGA CHE RESTITUISCE DUE PAROLE - versione 2
const word_3 = 'buongiorno';
const word_4 = 'buonasera';

function wordString_2(word_3, word_4) {
    string = word_3 + word_4;
    console.log('parola 3 e 4: ' + string);
}

wordString_2(word_3, word_4);

console.log('');

/* NEW FUNCTION ****************************************************************************/
// CREARE LA FUNZIONE DI UNA SOTTRAZIONE DI DUE NUMERI
const number_3 = 150;
console.log('(3) il primo numero è: ' + number_3);
const number_4 = 50;
console.log('(4) il secondo numero è: ' + number_4);

function sott(num_1, num_2) {
    sottrazione = num_1 - num_2;
    console.log('la sottrazione dei due numeri è: ', sottrazione);
}

sott(number_3, number_4);

console.log('');

/* NEW FUNCTION ****************************************************************************/
// CREARE LA FUNZIONE DI UNA SOMMA DI DUE NUMERI CON RETURN
const number_5 = 130;
console.log('(5) il primo numero è: ' + number_5);
const number_6 = 78;
console.log('(6) il secondo numero è: ' + number_6);

function sum(num_1, num_2) {
    somma_numeri = num_1 + num_2;
    return sum;
}

const risultato = sum(number_5, number_6);
console.log('la somma dei due numeri è: ' + somma_numeri);

console.log('');

/*NEW FUNCTION ****************************************************************************/
// CALCOLA L’ETÀ
// trovo la data attuale COMPLETA
const date = new Date;
console.log('oggi è: ' + date);
// creo una nuova costante che estrae solo l'anno
const thisYear = date.getFullYear();
console.log(thisYear);
// chiedo all'utente l'anno di nascita
const userYearOfBirth = Number(prompt('in che anno sei nato?'));
// calcolo l'età dell'utente
function calcuserAge(num_1, num_2) {
    userAge = num_1 - num_2;
    console.log('la tua età è: ' + userAge);
}
calcuserAge(thisYear, userYearOfBirth);

/*NEW FUNCTION ****************************************************************************/
//MAGGIORENNE
function adult(num) {
    if (num > 18) {
        console.log('sei maggiorenne');
    } else {
        console.log('sei minorenne');
    }
}
adult(userAge);

/*NEW FUNCTION ****************************************************************************/
//UTENTE NATO IN GIORNO PARI/DISPARI

const userDayOfBirth = Number(prompt('inserisci il numero del tuo giorno di nascita'));
console.log('il numero del giorno in cui sei nato è: ' + userDayOfBirth);

function paridispari(num) {
    if (num % 2 === 0) {
        console.log('sei nato in un giorno pari');
    } else {
        console.log('sei nato in un giorno dispari');
    }
}

paridispari(userDayOfBirth);

/*NEW FUNCTION ****************************************************************************/
//UTENTE NATO IN GIORNO PARI/DISPARI con isPari

const userDayOfBirth_2 = Number(prompt('inserisci il numero del tuo giorno di nascita'));
console.log('il numero del giorno in cui sei nato è: ' + userDayOfBirth_2);

function paridispari(num) {
    if (num % 2 === 0) {
        console.log('sei nato in un giorno pari');
    } else {
        console.log('sei nato in un giorno dispari');
    }
}

paridispari(userDayOfBirth_2);
