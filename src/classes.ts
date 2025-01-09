// class Information {
//   name: string
//   email: string
//   password: string = ''
//   constructor(name: string, email: string) {
//     this.name = name
//     this.email = email
//   }
// }

// const userinfo = new Information('jamil', 'jamil@gmail.com')

class SuperHero {
    constructor(public name: string, private email: string) {}
  public get heroEmail() {
    //   getter is assocer the value in the class
    return this.email
  }
  public set setHeroEmail(email: string) {
    this.email = email
  }
}

const hero1 = new SuperHero('jamil', 'jamil@gmail.com')
// console.log(hero1.email)

console.log((hero1.setHeroEmail = 'j@j.com'))

class UserName {
  private _name: string = 'jamil'
  private _email: string = 'j@j.com'
  private _password: string = '1122'
  public userName: string = 'coder..'

  get userData(): {} {
    return {
      userName: this.userName,
      _name: this._name,
      _email: this._email,
      _password: this._password,
    }
  }
  set passwordSet(_password: string) {
    this._password = _password
  }
}

const datas = new UserName()
console.log((datas.passwordSet = '112233'))
console.log(datas.userData)
