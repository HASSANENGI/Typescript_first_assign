"use strict";
let animals = [`cat`, `dog`, `rabbit`];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    if (animals[i] == `dog`) {
        console.log(`A ${animals[i]} would make a great pet.`);
    }
    else if (animals[i] == `rabbit`) {
        console.log(`A ${animals[i]} is cute and cuddly.`);
    }
    else if (animals[i] == `cat`) {
        console.log(`A ${animals[i]} is wonderful companion..`);
    }
}
console.log(`Any of these animals would make a great pet!`);
