"use strict";
const user = {
    name: 'jamil',
    email: 'jamil@gmail.com',
    isActive: true,
};
// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//     return "createUser"
// }
// console.log(createUser({ name: 'hello', isPaid: true }))
const createCourse = ({ name, price }) => {
    return { message: 'course create successfully' };
};
createCourse({ name: 'reactjs', price: 300 });
const getUser = (user) => {
    return { name: 'jamil', email: 'jamil@gmail.com', password: '11222..' };
};
console.log(getUser({ name: 'jamil', email: 'jamil@gmail.com', password: '1122..' }));
const getClass = (info) => {
    return {
        name: 'class',
        timings: ['12'],
        teacher: 'sir fahad',
        stdName: 'ali',
        _id: '1122',
    };
};
console.log({
    name: 'class',
    timings: ['12'],
    teacher: 'sir fahad',
    stdName: 'ali',
    _id: '1122',
});
const myUser = {
    stdName: ['jamil', 'afzal', 'anees', 'farooq'],
};
let userAccount = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    addrees: '123 Main St',
    cardNum: 1234567890123456,
    expireData: '12/23',
    cardType: 'Visa',
    cvcNumber: 123,
};
userAccount.addrees = 'karachi pk';
console.log(userAccount);
