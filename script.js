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

// BULCE - do...while
let n = 10;
let num  = 0;
do {
    num++;
    console.log(num);
} while (num < n);


// for

let times = 10;

for (let i = 0; i < 10; i++) {
    console.log(`Hello ${i}!`);
}

let smallestNr = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNr) {
        smallestNr = numbers[i];
    }
}

console.log('Cel mai mic numar din lista este: ', smallestNr);


// for...of
const numbers2 = [22, 11, 91, 7, 33];

let min = numbers2[0];

for (const num of numbers2) {
    if (num < min) {
        min = num;
    }
}

console.log('Cel mai mic numar din array numbers2 este: ', min);


// for...in

const myCar = {
    brand: 'Volvo',
    model: 'XC90',
    manufactureYear: 2012
};

for (const property in myCar) {
    console.log(`${property} are valoarea ${myCar[property]}`);
}

// break si continue

const numbers3 = [1, 2, 3, 4, 5, 6];
const numberToFind = 3;
let isNumberInArray = false;

for (const num of numbers3) {
    console.log(num);
    if (numberToFind === num){
        isNumberInArray = true;
        break;
    }  
}

console.log(`${numberToFind} este in array: ${isNumberInArray}`);


for (const num of numbers3) {
    if (num % 2 > 0) {
        continue;
    }
    console.log(`numarul ${num} este par iar dublul lui este ${num * 2}`);
}