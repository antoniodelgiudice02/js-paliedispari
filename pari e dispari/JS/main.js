



//  NUMERO UTENTE 

const sceltaUtente = prompt('Scegli pari o dispari')
const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'))

// NUMERO COMPUTER

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min - 1) + min);
    return randomNumber;
}

const numeroComputer = getRandomNumber(1, 5);
console.log(numeroComputer)


// SOMMA DUE NUMERI

function addizione (a, b){
    const somma = a + b;
    return somma;
}

const result = addizione(numeroUtente, numeroComputer)
console.log(result)

// STABILIAMO CON UNA FUNZIONE SE LA SOMMA DEI NUMERI E' PARI O DISPARI

let game

function verdetto (result){
    if (result % 2 == 0){
        game = ('pari')
    } else{
        game=('dispari')
    }
    console.log(`la somma è ${game}`)
}

const verdettoFinale = verdetto(result)

//DICHIARO CHI HA VINTO

if(sceltaUtente === game){
    console.log('hai vinto')
} else {
    console.log('hai perso')
}


