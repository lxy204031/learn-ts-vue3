(() => {
  function getArr1(value: any, count: number): any[] {
    const arr: any[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr1(123.132, 5)
  const arr2 = getArr1('qrzdfsg', 5)
  console.log(arr1);
  console.log(arr1[0].toFixed(0));  // 因为是any类型没有代码提示
  console.log(arr2);
  console.log(arr2[0].split('')); // 因为是any类型没有代码提示

  // 使用泛型
  function getArr2<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr3 = getArr2<number>(99.99, 3)
  const arr4 = getArr2<string>('wrwerfadas', 2)
  console.log(arr3);
  console.log(arr3[0].toFixed(1));
  console.log(arr4);
  console.log(arr4[0].split(''));

})()