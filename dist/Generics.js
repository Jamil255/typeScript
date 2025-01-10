"use strict";
function identityOne(agrs) {
    return agrs;
}
function identityTwo(agrs) {
    return agrs;
}
function identityThree(args) {
    return args;
}
const res = identityThree(1);
const res1 = identityThree('jamil afzal');
const res2 = identityThree(true);
// any vs generics 📌
// generics look the type  is return the type
function identityfour(args) {
    return args;
}
// arrow fuction 📌
const identityFive = (args) => {
    return args;
};
const identitySix = (args) => {
    //   console.log(args.length) 📌
    return args;
};
const indentitySeven = (args) => {
    //   console.log(args.length) ✔
    return args;
};
const identityEight = (args) => {
    return args;
};
const anotherFunction = (args1, args2) => {
    return {
        args1,
        args2,
    };
};
// const ress = anotherFunction(12, '12')
// console.log(ress)
const anotherFunction1 = (args1, args2) => {
    return {
        args1,
        args2,
    };
};
const ress = anotherFunction(12, 'true');
console.log(ress);
const anotherFun2 = (arg1, arg2) => {
    return [arg1, arg2];
};
const res11 = anotherFun2('smit db', {
    connection: 'hh74739dbbc',
    uuId: '1228n3',
    port: 3030,
});
console.log(res11);
// generics in class 📌
class SaleAble {
    constructor() {
        this.card = [];
    }
    addToCart(product) {
        this.card.push(product);
    }
}
const class1 = new SaleAble();
class1.addToCart('item1');
class1.addToCart('item2');
class1.addToCart('item3');
console.log(class1);
