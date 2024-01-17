const word = prompt('scrivi una parola')
console.log(word)

const printedWord = document.getElementById('printed-word')
const printedReverse = document.getElementById('printed-reverse')

// scrivo la parola al contrario con una funzione
function ReverseString(word) {
    return word.split('').reverse().join('')
}

const reverseWord = ReverseString(word)
console.log(ReverseString(word))


function palindromia(word1, word2) {
    
    if (word1 === word2) {
        console.log('la parola è palindroma')
    } else {
        console.log('la parola non è palindroma')
    }

}

palindromia(word, reverseWord)

printedWord.innerText = word
printedReverse.innerText = (reverseWord)




