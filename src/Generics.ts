function identityOne(agrs: number | boolean): number | boolean {
  return agrs
}

function identityTwo(agrs: any): any {
  return agrs
}

function identityThree<Type>(args: Type): Type {
  return args
}
const res = identityThree(1)
const res1 = identityThree('jamil afzal')
const res2 = identityThree(true)

// any vs generics 📌
// generics look the type  is return the type

function identityfour<T>(args: T): T {
  return args
}

// arrow fuction 📌

const identityFive = <K>(args: K): K => {
  return args
}

const identitySix = <L>(args: L): L => {
  //   console.log(args.length) 📌
  return args
}

const indentitySeven = <M>(args: M[]): M[] => {
  //   console.log(args.length) ✔
  return args
}

const identityEight = <N>(args: Array<N>): Array<N> => {
  return args
}

const anotherFunction = <A, B>(args1: A, args2: B): object => {
  return {
    args1,
    args2,
  }
}

// const ress = anotherFunction(12, '12')
// console.log(ress)
const anotherFunction1 = <A, B extends string>(args1: A, args2: B): object => {
  return {
    args1,
    args2,
  }
}

const ress = anotherFunction(12, 'true')
console.log(ress)

const anotherFun2 = <C, D extends DataBase>(arg1: C, arg2: D): [C, D] => {
  return [arg1, arg2]
}

interface DataBase {
  connection: string
  uuId: string
  port: number
}

const res11 = anotherFun2('smit db', {
  connection: 'hh74739dbbc',
  uuId: '1228n3',
  port: 3030,
})
console.log(res11)

// generics in class 📌

class SaleAble<T> {
  public card: T[] = []
  addToCart(product: T) {
    this.card.push(product)
  }
}

const class1 = new SaleAble<string>()
class1.addToCart('item1')
class1.addToCart('item2')
class1.addToCart('item3')

console.log(class1)
