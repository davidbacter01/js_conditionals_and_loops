let isChoreDone = false;
let hasEaten = false;

if (isChoreDone && hasEaten) {
    console.log('Te poti uita la desene animate!');
}

if (!isChoreDone || !hasEaten) {

    if (!isChoreDone) {
        console.log('Inca mai ai de lucru! Poti sa te uiti la desene dupa ce ai terminat treaba.');
    }

    if (!hasEaten) {
        console.log('Inca nu ai terminat de mancat! Te poti uita la desene cand farfuria e goala!');
    }    
}

// if...else
if (isChoreDone && hasEaten) {
    console.log('Te poti uita la desene animate!');
} else {
    if (!isChoreDone) {
        console.log('Inca mai ai de lucru! Poti sa te uiti la desene dupa ce ai terminat treaba.');
    }

    if (!hasEaten) {
        console.log('Inca nu ai terminat de mancat! Te poti uita la desene cand farfuria e goala!');
    }  
}


// if...else if...else

let number = -13;

if (number > 0) {
    console.log('Numarul ales este pozitiv');
} else if (number < 0) {
    console.log('Numarul ales este negativ');
} else {
    console.log('Numarul ales este 0');
}


// switch
const dayOfTheWeek = 11;

switch (dayOfTheWeek) {
   case 1:
    console.log('Ziua este Luni');
    break; 
   case 2:
    console.log('Ziua saptamanii este Marti');
    break;
   default:
    console.log('Nu stiu ce zi a saptamanii este aceasta');
    break;
}


// BUCLE - while
const numbers = [2, 99, 34, 25, 1, 2, -23];

let smallestNumber = Number.MAX_SAFE_INTEGER;
let currentIndex = 0;

while (currentIndex < numbers.length) {
    if (numbers[currentIndex] < smallestNumber) {
        smallestNumber = numbers[currentIndex];
    }

    currentIndex++;
}

console.log('Cel mai mic numar din lista este: ', smallestNumber);