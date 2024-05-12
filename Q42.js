"use strict";
let magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Derren Brown", "Criss Angel", "Dynamo"];
function show_magicians(magicians) {
    console.log(magicians);
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The great ` + magicians[i];
        console.log(magicians);
    }
}
make_great(magicians);
show_magicians(magicians);
