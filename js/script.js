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
        return odd
    }else{
        return even
    }
}

/* inserisco input utente per O or E, NUMERO + inserisco numero generato da pc */
const inputUserOddOrEven = prompt('type odd or even')
const inputUserNumber = parseInt(prompt('type a number from 1 to 5'))

/* applico funzioni*/
const outputAiNumber = randomNumberFromOneTo(5)

const sumOfNumber = inputUserNumber + outputAiNumber

let sumOfNumberOddOrEven = oddOrEven(sumOfNumber)

if ( sumOfNumberOddOrEven == inputUserOddOrEven){
    console.log('HAI VINTO!')
}else{
    console.log('HAI PERSO!')
}





/* mostro risultati */