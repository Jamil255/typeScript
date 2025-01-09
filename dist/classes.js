"use strict";
class Information {
    constructor(name, email) {
        this.password = '';
        this.name = name;
        this.email = email;
    }
}
const userinfo = new Information('jamil', 'jamil@gmail.com');
console.log(userinfo);
