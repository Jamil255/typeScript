"use strict";
// class Information {
//   name: string
//   email: string
//   password: string = ''
//   constructor(name: string, email: string) {
//     this.name = name
//     this.email = email
//   }
// }
// const userinfo = new Information('jamil', 'jamil@gmail.com')
class SuperHero {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get heroEmail() {
        //   getter is assocer the value in the class
        return this.email;
    }
    set setHeroEmail(email) {
        this.email = email;
    }
}
const hero1 = new SuperHero('jamil', 'jamil@gmail.com');
// console.log(hero1.email)
console.log((hero1.setHeroEmail = 'j@j.com'));
class UserName {
    constructor() {
        this._name = 'jamil';
        this._email = 'j@j.com';
        this._password = '1122';
        this.userName = 'coder..';
    }
    get userData() {
        return {
            userName: this.userName,
            _name: this._name,
            _email: this._email,
            _password: this._password,
        };
    }
    set passwordSet(_password) {
        this._password = _password;
    }
}
const datas = new UserName();
console.log((datas.passwordSet = '112233'));
console.log(datas.userData);
