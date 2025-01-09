"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo = (a, b) => {
    return b;
};
const a = foo(12, '20');
console.log(a);
const loginUser = (name, email, isPaid = false) => { };
const login = loginUser('jamil', 'jamil@gmail.com');
console.log(login);
const arrowFun = (a) => {
    if (a > 0)
        return true;
    return 'status 200 ok';
};
console.log(arrowFun(0));
const consoleError = (errorMsg) => {
    console.log(errorMsg);
    return 1;
};
console.log(consoleError('error will be error'));
const heros = ['spiderman', 'ironman', 'marvel'];
heros.map((hero, index) => `${hero}: ${index}`);
