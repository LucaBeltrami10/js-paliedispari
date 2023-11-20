/* PARI E DISPARI */
/* funzioni */

/* funzione numero random: 
funzione in cui come argomenti inserisco i numeri estremi tra cui generare random da generare
return: numero casuale generato*/
function randomNumberFromOneTo (numA){
    let randomNumber = Math.floor(Math.random() * numA) + 1
    return randomNumber
}

/* funzione Odd or Even:
funzione in cui sommo due numeri e li divido per due:
return: pari se il resto è zero
return: dispari se il resto è !0 */

function oddOrEven (numA){
    if (numA % 2 == 0){
        return 'odd'
    }else{
        return 'even'
    }
}

/* inserisco input utente per O or E, NUMERO + inserisco numero generato da pc */
const inputUserOddOrEven = prompt('type odd or even')
console.log(`l'utente ha scelto: ${inputUserOddOrEven}`)
const inputUserNumber = parseInt(prompt('type a number from 1 to 5'))
console.log(`l'utente ha inserito: ${inputUserNumber}`)

/* applico funzioni per generare numero ai randomico e per elaborare se la somma dei numeri è Odd or even*/
const outputAiNumber = randomNumberFromOneTo(5)
console.log(`numero random pc: ${outputAiNumber}`)

const sumOfNumber = inputUserNumber + outputAiNumber
console.log(`somma dei numeri: ${sumOfNumber}`)

let sumOfNumberIsOddOrEven = oddOrEven(sumOfNumber)

/* mostro risultati */
if ( sumOfNumberIsOddOrEven == inputUserOddOrEven){
    console.log('HAI VINTO!')
}else{
    console.log('HAI PERSO!')
}


/* PALINDROMA */

/* funzione */
/* determino lunghezza della parola
creo un ciclo lungo come la parola
verifico che la lettera al posto i sia uguale alla lettera al posto .length - i */
function isPalindrome (itemA){

    const wordLength = itemA.length
    const lastLetterPosition = wordLength - 1

    let isPalindrome = true
    
    for (i=0; i<wordLength ; i++){
        if (itemA[i] == itemA[lastLetterPosition - i]){
            console.log(`letter ${itemA[i]} is equal to ${itemA[lastLetterPosition - i]}`)
        } else{
            console.log('lettere non uguali')
            isPalindrome = false
        }
    }

    return isPalindrome


    /* CICLO DO WHILE CON PROBLEMA */
    /* let isPalindrome = true
    let numA = 0
    let numB = wordLength - 1
    */
    /* PROBLEMA: ARRIVATO AD UN CERTO PUNTO, OLTRE LA LUNGHEZZA DELLA PAROLA, LA CONDIZIONE CONTINUA ALL'INFINITO  INDEFINITA = INDEFINITA */

    /*do {
        if (itemA[numA] == itemA[numB]){
            console.log(`letter ${itemA[numA]} is equal to ${itemA[numB]}`)
            numA += 1
            numB -= 1
        } else{
            isPalindrome = false
        }
    } while (( itemA[numA] == itemA[numB]))

    return isPalindrome */
}



/* richiedo all'utente una parola */
const userWord = prompt('type a word')

/* uso funzione per verificare palindromia */
let isUserWordPalindrome = isPalindrome(userWord)

/* mostro i risultati */
if(isUserWordPalindrome == true){
    console.log('LA PAROLA è PALINDROMA!')
}else{
    console.log('la parola NON è palindroma!')
}



