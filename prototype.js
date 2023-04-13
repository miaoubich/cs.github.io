"use strict";

/*
let head = {
    glasses: 1
};
let table ={
    pen: 3
};
let bed = {
    sheet: 1,
    pillow: 2
};
let pockets = {
    money: 2000
};
*/

/*
let head = {
    glasses: 1
};
let table = Object.create(head);
table.pen= 3;

let bed = Object.create(table);
bed.sheet= 1;
bed.pillow= 2;

let pockets = Object.create(bed);
pockets.money= 2000;

console.log("pockets.pen: " + pockets.pen);
console.log("pockets.glasses: " + pockets.glasses);
*/

/*
function User(name){
    this.name = name;
    this.isAdmin = false;

    return 3;// is ignored, always will return this
}
let user = new User("Ali");

console.log(user);
console.log(user.name);
*/

/*
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
*/

/*
let fullName = {
    0: "Ali",
    1: "Bouzar!",
    length: 2,
};
fullName.join = Array.prototype.join;
console.log(fullName.join(' ')); // Ali Bouzar!
*/







