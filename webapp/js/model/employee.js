"use strict"

import Person from './person.js';

export default class Employee extends Person {
    salary;
    hireDate;
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.salary = salary.toFixed(2);
        this.hireDate = hireDate;
    }

    doJob(jobTitle){
        return `${this.name} is a ${jobTitle} who earns $${this.salary}`;
    }
}