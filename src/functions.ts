const foo = (a: number, b: string): string => {
  return b
}
const a = foo(12, '20')
console.log(a)

const loginUser = (name: string, email: string, isPaid: boolean = false) => {}
const login = loginUser('jamil', 'jamil@gmail.com')
console.log(login)

const arrowFun = (a: number): string | boolean => {
  if (a > 0) return true
  return 'status 200 ok'
}

console.log(arrowFun(0))

const consoleError = (errorMsg: string): void | number => {
  console.log(errorMsg)
  return 1
}

console.log(consoleError('error will be error'))

const heros = ['spiderman', 'ironman', 'marvel']

heros.map((hero, index): string => `${hero}: ${index}`)
// map in ts
// map is very smart datatype is auto detacted

export {}
