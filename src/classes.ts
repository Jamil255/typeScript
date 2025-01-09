class Information {
  name: string
  email: string
  password: string = ''
  constructor(name: string, email: string) {
    this.name = name
    this.email = email
  }
}

const userinfo = new Information('jamil', 'jamil@gmail.com')
console.log(userinfo)
