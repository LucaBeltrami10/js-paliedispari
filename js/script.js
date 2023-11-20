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
        return true
    }else{
        return false
    }
}

/* inserisco input utente per O or E, NUMERO */
const inputUserOddOrEven = prompt('type odd or even')
const inputUserNumber = prompt('type a number from 1 to 5')

/* applico funzioni */

/* mostro risultati */