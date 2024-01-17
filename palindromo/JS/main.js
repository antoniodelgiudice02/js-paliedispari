const word = prompt('scrivi una parola')
console.log(word)

const printedWord = document.getElementById('printed-word')
const printedReverse = document.getElementById('printed-reverse')

// Function to reverse string
function ReverseString(word) {
	return word.split('').reverse().join('')
}

// Function call
const reverseWord = ReverseString(word)
console.log(ReverseString(word))


printedWord.innerText = word
printedReverse.innerText = (reverseWord)




