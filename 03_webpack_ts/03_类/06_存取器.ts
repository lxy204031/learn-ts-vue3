(() => {
  class Person {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }
    get fullName() {
      return this.firstName + '_' + this.lastName
    }
    set fullName(val) {
      const name = val.split('_')
      this.firstName = name[0]
      this.lastName = name[1]
    }
  }

  const person: Person = new Person('东方', '不败')
  console.log(person);
  console.log(person.fullName);
  person.fullName = '诸葛_孔明'
  console.log(person);
  console.log(person.fullName);
})()