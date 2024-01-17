
//  NUMERO UTENTE 

const scelta = prompt('Scegli pari o dispari')
const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'))

// NUMERO COMPUTER

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min - 1) + min);
    return randomNumber;
}

const numeroComputer = getRandomNumber(1, 5);
console.log(numeroComputer)