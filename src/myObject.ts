const user = {
  name: 'jamil',
  email: 'jamil@gmail.com',
  isActive: true,
}

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//     return "createUser"
// }

// console.log(createUser({ name: 'hello', isPaid: true }))

const createCourse = ({ name, price }: { name: string; price: number }) => {
  return { message: 'course create successfully' }
}

createCourse({ name: 'reactjs', price: 300 })

// type ALiasise
type MyString = string
type Bool = boolean

type User = {
  name: MyString
  email: MyString
  isActive?: Bool
  password: MyString
}

const getUser = (user: User): User => {
  return { name: 'jamil', email: 'jamil@gmail.com', password: '11222..' }
}
console.log(
  getUser({ name: 'jamil', email: 'jamil@gmail.com', password: '1122..' })
)

type Class = {
  readonly _id: string
  name: string
  timings: Array<string>
  teacher: string
  stdName: string
}
const getClass = (info: Class): Class => {
  return {
    name: 'class',
    timings: ['12'],
    teacher: 'sir fahad',
    stdName: 'ali',
    _id: '1122',
  }
}

console.log({
  name: 'class',
  timings: ['12'],
  teacher: 'sir fahad',
  stdName: 'ali',
  _id: '1122',
})

type Users = {
  readonly timing: ReadonlyArray<string>
  name: string
}

// const myUser: Users = {
//   timing: ['timing', 'name'],
//   name: 'jamil',
// }

// myUser.timing[0] = 'hello what is this'

type Userss = {
  StdName: ReadonlyArray<string>
}

const myUser = {
  stdName: ['jamil', 'afzal', 'anees', 'farooq'],
}

// myUser.StdName[0]="myUser"📌

type Card = {
  name: string
  email: string
  addrees: string
}
type CardDetails = {
  cardNum: number
  expireData: string
  cardType: string
}

// 📌
type CardCvc = Card &
  CardDetails & {
    cvcNumber: number
  }

let userAccount: CardCvc = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  addrees: '123 Main St',
  cardNum: 1234567890123456,
  expireData: '12/23',
  cardType: 'Visa',
  cvcNumber: 123,
}
userAccount.addrees = 'karachi pk'

console.log(userAccount)