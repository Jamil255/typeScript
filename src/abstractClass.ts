abstract class TakePicture {
  constructor(public cemareMode: string, public filter: string) {}

  abstract clickCemare: () => void
  getPhoto: () => number = () => {
    return 1122
  }
}
// const newObj=new TakePicture()📌


class Instagram extends TakePicture {
  constructor(
    public cemareMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cemareMode, filter)
  }
  clickCemare = () => {
    console.log('hello from cemare')
  }
}

const res = new Instagram('test', 'test', 12)
console.log(res.clickCemare())
console.log(res.clickCemare())
