let a: number | string = 23

a = '23'
// a = true 📌

type UserData = {
  name: string
  readonly _id: string
}

type Admin = {
  userName: string
  readonly _id: string
}

let jamil: UserData | Admin = { userName: 'Jamil', _id: '123' }

const userdata: string[] = ['name', 'email']
const contact: number[] = [11, 11]

// const userFile: string[] | number[] = ["12",22] 📌

const userFile: (string | number)[] = ['jamil afzal', 12]

type Format = [number, string]

const b: Format = [11, 'jamil']

let allotSeat: 'front' | 'back' | 'center' = 'center'
