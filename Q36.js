"use strict";
// Q36 and Q37
function make_Shirt(size = `large`, message = `I love typescript`) {
    console.log(`The size of shirt is: ${size} and message printed on it is: ${message}`);
}
make_Shirt();
make_Shirt(`Medium`);
make_Shirt(`small`, `Typescript is superset of javascript`);
