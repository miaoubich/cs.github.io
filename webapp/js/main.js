"use strict";

import Person from './model/person.js';
import Employee from './model/employee.js';

let ana = new Person('Ana Smith', new Date('1998-12-15'));
let bob = new Person('Bob Jone', new Date('1945-11-16'));
let carlos = new Person('Carlos Slim Helu', new Date('1976-09-24'));

let persons = [ana, bob, carlos];

for(let p of persons){
    console.log(p.toString());
}

let employee = new Employee('Jim Hanson',new Date('1990-04-23'),  245990.00, new Date('2020-05-12'));
console.log(employee.doJob('Software Engineer'));
