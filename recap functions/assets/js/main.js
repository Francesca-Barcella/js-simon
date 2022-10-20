// CREARE LA FUNZIONE DI UNA SOMMA DI DUE NUMERI
// - definire i due numeri
const first_number = 20;
console.log('(1) il primo numero è: ' + first_number);
const second_number = 37;
console.log('(2) il secondo numero è: ' + second_number);

//mi serve sicuramente una funzione con due parametri
function sum(num_1, num_2) {
    //dentro dovrò eseguire la somma dei due parametri
    const somma = num_1 + num_2;
    console.log('Dentro sum()', somma);
}

//evoco la funzione e assegno i due valori da inserire al posto dei parametri
sum(first_number, second_number);

console.log('');

/* NEW FUNCTION ****************************************************************************/
// CREARE LA FUNZIONE DI UNA STRINGA CHE RESTITUISCE DUE PAROLE - versione 1
const first_word = 'buongiorno';
const second_word = 'buonasera';

function wordString_1(word_1, word_2) {
    const first_string = word_1;
    const second_string = word_2;

    console.log('parola 1 e 2: ' + first_string + ' ' + second_string);
}

wordString_1(first_word, second_word);

console.log('');

/* NEW FUNCTION ****************************************************************************/
// CREARE LA FUNZIONE DI UNA STRINGA CHE RESTITUISCE DUE PAROLE - versione 2
const word_3 = 'buongiorno';
const word_4 = 'buonasera';

function wordString_2(word_3, word_4) {
    const string = word_3 + word_4;
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
    const somma_numeri = num_1 + num_2;
    return somma_numeri;
}

const risultato = sum(number_5, number_6);
console.log('la somma dei due numeri è: ' + risultato);

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

/* const userDayOfBirth_2 = Number(prompt('inserisci il numero del tuo giorno di nascita'));
console.log('il numero del giorno in cui sei nato è: ' + userDayOfBirth_2);

function paridispari(num) {
    if (num % 2 === 0) {
        console.log('sei nato in un giorno pari');
    } else {
        console.log('sei nato in un giorno dispari');
    }
}

paridispari(userDayOfBirth_2); */
