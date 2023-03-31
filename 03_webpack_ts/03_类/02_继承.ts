(() => {
  class Person {
    name: string
    age: number
    gender: string
    constructor(name:string, age:number, gender:string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHi(str: string) {
      console.log(`I'm ${this.name}, I'm ${this.age} year's old and I'm a ${this.gender},`, str);
    }
  }

  class Student extends Person {
    constructor(name:string, age:number, gender:string) {
      super(name, age, gender)
    }
    sayHi(str: string){
      console.log('我是子类');
      super.sayHi('hihi')
    }
  }

  const person = new Person('Bread', 18, 'girl')
  person.sayHi('哈哈哈')
  const student = new Student('Ten', 18, 'boy')
  console.log(student.name);0 
  
  student.sayHi('hihi')
})()