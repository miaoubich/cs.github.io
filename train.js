"use strict";

// // const x = {
// //     'a': 97,
// //     'b': 98,
// //     'c': 99,
// //     'd': 199,
// //     'mult': function (a, b) {
// //         let c = 5;
// //         return a * b;
// //     }
// // };
// // console.log(x.mult(2, 3));

// // const factorial = function fact(n) {
// //     return n < 2 ? 1 : n * fact(n - 1);
// // }
// // console.log(factorial(4));

// // var arr = [1, 2, 3, 4, 5];
// // let newArr = arr.map(function (e, i, arr) {
// //     return e + 2;
// // })
// // let newArr1 = arr.map(e => e + 2);
// // console.log(newArr1);

// // //window.onload = () => confirm("Salam aleikoum!");

// // function findMax() {
// //     var i;
// //     var max = -Infinity;
// //     for (i = 0; i < arguments.length; i++) {
// //         if (arguments[i] > max) {
// //             max = arguments[i];
// //         }
// //     }
// //     return max;
// // }
// // var max1 = findMax(1, 123, 190, 115, 66, 88);
// // console.log("MAx: " + max1)

// // function sum(x, y, ...more) {
// //     //"more" is array of all extra passed params
// //     let total = 0;
// //     if (more.length > 0) {
// //         for (let i = 0; i < more.length; i++) {
// //             total += more[i];
// //         }
// //     }
// //     console.log("Total: " + total);
// //     return total;
// // }
// // sum(5, 5, 5);
// // sum(6, 6, 6, 6, 6);

// // let arr1 = [1, 3, 5, 4];
// // console.log(Math.max(...arr1));

// // let [a, b, c, d] = arr1;
// // console.log("a: " + a);
// // console.log("b: " + b);
// // console.log("c: " + c);
// // console.log("d: " + d);

// // let user = {};
// // [user.name, user.fname] = 'Ali Bouzar'.split(' ');
// // console.log(user);

// // let options = {
// //     title: "Menu",
// //     width: 100,
// //     height: 200
// // };
// // console.log(options['title']);

// // function showMessage(from, text) {
// //     from = '*' + from + '*'; // make "from" look nicer
// //     console.log(from + ': ' + text);
// // }
// // let from = "Ann";
// // showMessage(from, "Hello"); // *Ann*: Hello

// // function sayHi() {
// //     console.log("Hello");
// // }
// // console.log(sayHi());

// // let fruits = ["Apple", "Orange", "Plum"];
// // // iterates over array elements
// // for (let fruit of fruits) {
// // alert( fruit );}

// const arr = [1, 2, 3, 4];
// function sum(arr) {
//     let result = 0;
//     // for (let i = 0; i < arr.length; i++) {
//     for (let i in arr) {
//         result += arr[i];
//     }
//     console.log("Sum is: " + result);
// }
// sum(arr);
// function multiplier(arr) {
//     let multiply = 1;
//     for (let i = 0; i < arr.length; i++) {
//         multiply *= arr[i];
//     }
//     console.log("Product is: " + multiply);
// }
// multiplier(arr);

// const gradeReport = { s101: 3, s102: 2, s103: 3 };

// function avg(){
//     let sum = 0;
//     let a = 0;
//     let l =0;
//     for(let r in gradeReport){
//            sum += gradeReport[r];
//            l +=1;
//     }
//    a = sum/l;
//   return a;
//  }
//  console.log("avg: " + avg());

//  const user = {
//     name: "John"
//     };
//     const user1 = {
//         name: "John",
//         age: 25
//     };

//     user.age = 25; // (*)
//     console.log(user);
//     user.name = 'Fred';
//     console.log(user === user1); //’Fred’

// const a = {name: "John", age: 10};
// const b = a;
// b.name = "alex";
// b.age = 65;
// console.log(a === b);

// x=1;
// var a=5;
// var b=7;
// var c = function(a,b,c){
//     document.write(x);
//     document.write(a);
//     var f = function(a,b,c){
//         b=a;
//         document.write(b);
//         b=c;
//         var x=5;
//     }
//     f(a,b,c);
//     document.write(b);
//     var x=10;
// }
// c(8,9,10);
// document.write(b);
// document.write(x);

// var x=9;
// function my(){
//     return x*x;
// }
// document.write(my());
// x = 5;
// document.write(my());

// var foo=1;
// function bar(){
//     if(!foo){
//         var foo =10;
//     }
//     alert(foo);
// }
// bar();

/*
function makeArmy(){
    let shooters = [];
    let i = 0;
    while(i<2){
        let shooter = function(){
            alert(i);
       };
       shooter()
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0];
console.log(army);
*/

/*
let user ={
    name: "Ali"
}

function display(arg, arg1){
    console.log(this.name, arg, arg1);
}
display.call(user, 5, 6);
display.apply(user, [7, 6]);
*/

/*
function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'jhon',
    loginOk() {
        alert('${this.name} login in');
    },
    loginFail() {
        alert('${this.name} failed to log in');
    }
};

askPassword.call(user, user.loginOk, user.loginFail);
askPassword.apply(user, [user.loginOk, user.loginFail]);
askPassword.bind(user, user.loginOk, user.loginFail)();
*/


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

const group1 = function(){
    this.showList();
}
const groupBind = group1.bind(group);
groupBind();

// group.showList();



// function sayHi(){
//     return "Hello";
// }
// setTimeout(sayHi, 1000);

// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi();

/*
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [john, pete];

let mappedPeople = people.map(person => {
  return {
    fullName: `${person.name} ${person.surname}`,
    age: person.age
  };
});
console.log(mappedPeople);
*/