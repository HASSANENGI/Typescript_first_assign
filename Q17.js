"use strict";
console.log(`I can invite only two guests for dinner`);
let guest_list = ['ramiz', 'saim', 'Jabir', 'Ali', 'karim', 'Umair'];
console.log(guest_list.pop(), `We are sorry we can't invite you to dinner,`);
console.log(guest_list.pop(), `We are sorry we can't invite you to dinner,`);
console.log(guest_list.pop(), `We are sorry we can't invite you to dinner,`);
console.log(guest_list.pop(), `We are sorry we can't invite you to dinner,`);
console.log(guest_list[0], `You are still invited`);
console.log(guest_list[1], `You are still invited`);
guest_list.pop();
guest_list.pop();
console.log(guest_list);
