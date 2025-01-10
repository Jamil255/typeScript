"use strict";
const detectType = (val) => {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 2;
};
// console.log(detectType(""))
function provideId(id) {
    if (!id) {
        console.log('please id is  provided');
        return;
    }
    id.toLowerCase();
}
// console.log(provideId(null));
function printAll(str) {
    if (str) {
        if (typeof str === 'object') {
            for (const key in str) {
                console.log(key);
            }
        }
    }
    else if (typeof str === 'string') {
        console.log(str);
    }
}
function isAdmin(user) {
    if ('isAdmin' in user) {
        return user.isAdmin;
    }
}
// if new key is used then instanceof case of implements📌
function add(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'brid food';
    }
}
function trueShape(shape) {
    if (shape.kind === 'cricle') {
        return Math.PI * shape.radius ** 2;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case 'cricle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'reactangle':
            return Math.PI * shape.length;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
console.log(getArea({ kind: 'cricle', radius: 12 }));
