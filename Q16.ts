var Guest_list=[`saim`,`yousaf`,`karim`]
console.log(Guest_list[1],`cannot make it to dinner`)
Guest_list[1]=`Ali`
console.log(`Hi`,Guest_list[0],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[1],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[2],`You're invited to join us for dinner!`)
// Informing People that i found a bigger table
console.log(`Hello`,Guest_list,`I found a bigger table`)
// Adding new guest in a list
Guest_list.push(`Umair`) // Adds new guest in the end
Guest_list.unshift(`ramiz`)    // Adds new guest in the beginning
Guest_list.splice(2,0,`Jabir`)  // Adds new guest in the middle of list
// Invitation messages
console.log(`Hi`,Guest_list[0],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[1],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[2],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[3],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[4],`You're invited to join us for dinner!`)
console.log(`Hi`,Guest_list[5],`You're invited to join us for dinner!`)
console.log(Guest_list)