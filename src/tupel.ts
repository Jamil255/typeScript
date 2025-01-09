const array: Array<number> = [112, 33, 44, 55, 5, 5]
let mixArray: [number, string, string, boolean] = [12, 'number', 'string', true]

type UserTuple = [number, string, boolean]

const userTuple: UserTuple = [12, 'jamil', true]

userTuple[0] = 120
// 📌
userTuple.push('hello')
userTuple.unshift('1122833')
