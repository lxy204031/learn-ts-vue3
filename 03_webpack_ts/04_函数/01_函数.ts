(() => {
  // 命名函数
  function add1(x: string, y: string): string {
    return x + y
  }
  // 匿名函数
  const add2 = function (x: number, y: number): number {
    return x + y
  }
  const result1: string = add1('你好', '呀')
  const result2: number = add2(1, 1)
  console.log(result1);
  console.log(result2);
  // 完整写法
  // (x: number, y: number) => number 函数类型
  // 等号后面是满足上面函数类型的函数
  let add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  const result3 = add3(10, 10)
  console.log(result3);
})()