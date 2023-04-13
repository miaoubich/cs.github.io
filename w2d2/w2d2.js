"use strict";

/* Exercise 1 */
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

/* Excercise 2 */
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