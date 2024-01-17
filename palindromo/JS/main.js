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

// trasformo le stringhe in array

const wordArray = word.split('')
const reverseArray = reverseWord.split('')
console.log(wordArray)
console.log(reverseArray)

printedWord.innerText = word
printedReverse.innerText = (reverseWord)




