"use strict";

export default class Person{
    name;
    dateOfBirth;

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName(){
        return this.name;
    }
    setName(n){
        this.name = n;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(d){
        this.dateOfBirth = d;
    }

    toString(){
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`;
    }
}
