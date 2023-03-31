(() => {
  function fun1<T>(x: T): void {
    // console.log(x.length);  // error
  }
  // 约束将来某个类型必须有length属性
  // （即类型必须为string，array等数据类型，或者是有length属性的类）
  interface LengthWise {
    length: number
  }

  function fun2<T extends LengthWise>(x: T): void {
    console.log(x.length);
  }
  fun2<string>('1515')
})()