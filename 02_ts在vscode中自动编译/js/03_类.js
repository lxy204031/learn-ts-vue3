(() => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
    }
    function fullName(person) {
        return person.firstName + "----" + person.lastName;
    }
    let person = new Person('诸葛', '孔明');
    console.log(person.fullName);
    console.log(fullName(person));
})();
