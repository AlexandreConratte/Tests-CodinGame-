/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n: number = parseInt(readline());   // readline étant la function readline(): string Read a line from stdin définie par codingame


let v_max : number = 0
let p_max : number = 0


var inputs: string[] = readline().split(' ');
for (let i = 0; i < n; i++) {
    const v: number = parseInt(inputs[i]);
    if ( v > v_max ) {
         v_max = v
    }
    else { 
        v_max = v_max
    }

    if ( v_max - v > p_max) {
        p_max = v_max - v
    }
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
if (p_max === 0) { 
    console.log(0)
}
else {
    console.log(-p_max)
}

function readline(): string {
    throw new Error("Function not implemented.");
}
