(() => {
  class Person {
    // readonly name: string
    constructor(readonly name: string = 'Bread') {
      // this.name = name
    }
    sayHi() {
      console.log(`我叫${this.name}`);
    }
  }

  const person: Person = new Person('TEN')
  console.log(person);
  console.log(person.name);
  // person.name = 'ten'
  person.sayHi();
})()