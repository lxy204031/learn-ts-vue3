(() => {
  class Person {
    name: string
    age: number
    gender: string
    constructor(name: string='小面包', age: number=18, gender: string='女') {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHi(str: string) {
      console.log(`你好，我叫${this.name}，今年${this.age}岁，是${this.gender}孩子，`, str);
    }
  }

  const person = new Person()
  person.sayHi('你叫什么名字？')
})()