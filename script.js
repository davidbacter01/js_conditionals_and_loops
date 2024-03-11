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