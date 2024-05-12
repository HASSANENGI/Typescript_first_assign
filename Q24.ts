let fruit1="Mango";
let fruit2="apple";
console.log("Is both fruit are not same? I predict true");
console.log(fruit1!=fruit2);

let animal1 = "Tiger";
let animal2 = "Tiger"
console.log("Is both animal are  same? I predict true");
console.log(animal1==animal2)

let name1="hassan";
let name2="HASSAN";
console.log("Is name1 and lower case of name2 are same ? I predict true");
console.log(name1==name2.toLowerCase());

console.log("Is name1 and lower case of name2 are not same ? I predict false");
console.log(name1!=name2.toLowerCase());

let num1=24
let fav_num=9;
console.log("Is num1 and fav_num are  same ? I predict false")
console.log(num1==fav_num);

console.log("Is num1 and fav_num are not same ? I predict true")
console.log(num1!==fav_num);

let num2=83
let num3=88;
console.log("Is num2 is greater than num3  ? I predict false")
console.log(num2>num3);

console.log("Is num2 is less than num3  ? I predict true")
console.log(num2<num3);

console.log("Is num2 is greater than or equal to num3  ? I predict false")
console.log(num2>=num3);

console.log("Is num2 is less than or equal to num3  ? I predict true")
console.log(num2<=num3);

console.log("Is num3 is  greater than 80 and num2 is less than  90? I predict true")
console.log(num3>80 && num2<90);

console.log("Is num3 is  greater than 80 or num2 is less than  80? I predict true")
console.log(num3>80 || num2<80);


let Pak_cities=["Islamabad","Rwp","Lahore","Karachi","Quetta"];
console.log( `Check Lahore is PAkistani city or not ? I predict 'yes it is'` );
console.log(Pak_cities.includes(`Lahore` ));

console.log( `Check Kabul is PAkistani city or not ? I predict 'no it's not '` );
console.log(Pak_cities.includes(`Kabul`));