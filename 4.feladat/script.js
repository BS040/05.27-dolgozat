function fullStack(frontEnd, backEnd) {
    
    const frontEndNev = frontEnd.split(';');
    const backEndNev = backEnd.split(';');

    const backEndSet = new Set(backEndNev);

    
    const nevek = frontEndNev.filter(name => backEndSet.has(name));

    return nevek;
}


const frontEnd = "Szabó János; Aza Riah; Curtis; Well Ciao; James Bond; Alekosz; Mc Isti; Dandero";
const backEnd = "Szabó János; Aza Riah; James Bond; Alekosz; Mc Isti; Drobedosz; Leopold";
console.log(fullStack(frontEnd, backEnd));
