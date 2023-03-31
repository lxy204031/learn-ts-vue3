(() => {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    let person = {
        firstName: '东方',
        lastName: '不败'
    };
    console.log(showFullName(person));
})();
