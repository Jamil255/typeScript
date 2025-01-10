const detectType = (val: string | number) => {
  if (typeof val === 'string') {
    return val.toLowerCase()
  }
  return val + 2
}
// console.log(detectType(""))

function provideId(id: string | null) {
  if (!id) {
    console.log('please id is  provided')
    return
  }
  id.toLowerCase()
}

// console.log(provideId(null));

function printAll(str: string | string[] | null) {
  if (str) {
    if (typeof str === 'object') {
      for (const key in str) {
        console.log(key)
      }
    }
  } else if (typeof str === 'string') {
    console.log(str)
  }
}

interface Userr {
  name: string
  email: string
}

interface Admins {
  name: string
  email: string
  isAdmin: boolean
}
function isAdmin(user: Userr | Admins) {
  if ('isAdmin' in user) {
    return user.isAdmin
  }
}

// if new key is used then instanceof case of implements📌
function add(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toLowerCase())
  }
}

type Fish = { swim: () => void }
type Brid = { fly: () => void }

function isFish(pet: Fish | Brid): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Brid) {
  if (isFish(pet)) {
    pet
    return 'fish food'
  } else {
    pet
    return 'brid food'
  }
}
// console.log(getFood(swim()))

interface Cricle {
  kind: 'cricle'
  radius: number
}
interface Square {
  kind: 'square'
  side: number
}
interface Reactangle {
  kind: 'reactangle'
  length: number
  width: number
}

type Shape = Cricle | Reactangle | Square

function trueShape(shape: Shape) {
  if (shape.kind === 'cricle') {
    return Math.PI * shape.radius ** 2
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'cricle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.side * shape.side
    case 'reactangle':
      return Math.PI * shape.length
    default:
      const _defaultShape: never = shape
      return _defaultShape
  }
}
console.log(getArea({ kind: 'cricle', radius: 12 }))
