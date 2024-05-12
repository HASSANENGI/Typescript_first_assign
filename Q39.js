"use strict";
function city_country(city, country = `Pakistan`) {
    return (`${city}, ${country}`);
}
let a = city_country('Islamabad', `Pakistan`);
console.log(a);
let b = city_country(`Paris`, `France`);
console.log(b);
console.log(city_country(`Toyko`, `Japan`));
