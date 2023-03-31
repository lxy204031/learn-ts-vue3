(() => {
  class Person {
    name: string
    private age: number
    protected gender: string
    constructor(name: string, age: number, gender: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    show() {
      console.log(`你好，我叫${this.name}，今年${this.age}岁，是${this.gender}孩子`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      super(name, age, gender)
    }
    show() {
      console.log(`你好，我叫${this.name}，是${this.gender}孩子`);
    }
  }

  const person = new Person('bread', 18, '女')
  person.show()
  console.log(person.name);
  // console.log(person.age);
  // console.log(person.gender);

})()