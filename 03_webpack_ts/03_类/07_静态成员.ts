(() => {
  class Person {
    static name1: string
    constructor(name: string) {
      Person.name1 = name
    }
    static sayHi() {
      console.log('萨瓦迪卡');
    }
  }

  const person: Person = new Person('小面包')
  Person.sayHi()
  console.log(Person.name1);
  Person.name1 = 'bread'
  console.log(Person.name1);
  // person.sayHi()
})()