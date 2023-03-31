(() => {
  function name(firstName: string = 'Bread', lastName?: string): string {
    if(lastName) {
      return firstName + lastName
    } else {
      return firstName
    }
  }
  console.log(name());
  console.log(name('Bread', 'Lee'));
})()