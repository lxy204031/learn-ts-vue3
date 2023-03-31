(() => {
  interface Iperson {
    readonly id: number, // 只读，不可修改
    name: string,
    age: number,
    sex?: string  // 可有可无的属性
  }

  const person: Iperson = {
    id: 1,
    name: 'BREAD',
    age: 18,
    // sex: '女'
  }

  console.log(person)
  // person.id = 777
  console.log(person);
  
})()