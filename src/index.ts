// ********************<string>*********************

// let fullName: string = "jamil afzal"
// console.log(fullName)

// fullName = "override"

// console.log(fullName)

// let lastName: string = "hello bahi ye string ha"
// lastName = "to kia hoi is ma number assign ni ho ga"
// console.log(lastName)

// ********************<number>*********************
// let a: number = 0;
// a = 10

// ********************<boolean>*********************

// const a: boolean = false

// let c: string = 'hello bahi'

// ********************<null>*********************

// let a: null = null
// let b:null=null

// ********************<array && tuple>*********************

// let student: [string, number, string, boolean] = ["jamil", 20, "cse", true]

// let classTimings: Array<number> = []
// // or
// var classTimingss:string[] = []

// classTimingss[0]="jamil"
// classTimingss[1]=12

// ********************<object(type || interface)>*********************
// type StdName = {
//   fName: string
//   lName: string
//   age: number
//   rollNumber: number
//   getName: (a: string, b: string) => string
// }
//  📌 interface behind the scenes is used inheritance
// interface studentSchema {
//   fName: string
//   lName: string
//   age: number
//   rollNumber: number
//   getName: (a: string, b: string) => string
// }

// interface Class {
//   classRoom: number
//   teacher: string
//   studentName: string
//   rollNumber?: studentSchema|number
// }

// const student: studentSchema = {
//   fName: 'jamil',
//   lName: 'afzal',
//   age: 23,
//   rollNumber: 41,
//   getName: (a, b) => 'hello',
// }
// stdName.rollNumber="42" 📌
// console.log(student.age)

// const className: Class = {
//   classRoom: 408,
//   teacher: 'sir fahad',
//   studentName: 'ali',
//   rollNumber:student,
// }
// className.rollNumber=30
// console.log(className.rollNumber)

// ********************<function)>*********************
// const foo = (a: number, b: number): Object => {
//   return {
//     add: a + b,
//   }
// }
// const response = foo(12, 12)
//  console.log(response)
