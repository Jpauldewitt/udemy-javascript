const person = {
    firstName: 'Jesse',
    age: 30,
    email: 'jesse@aol.com',
    hobbies: ['video games', 'movies'],
    address: {
        city: 'Columbus',
        state: 'Ohio'
    },
    getBirthYear: function(){
        return 1990 - this.age;     //within object - use "this"
    }
}

let value;

value = person;                     // displays all variables within object
value = person.firstName;           // displays variable within object
value = person['firstName'];        // 2nd method to display variable within object
value = person.age;                 // displays age variable
value = person.hobbies[1];          // displays 2nd hobby
value = person.address.city         // displays city variable within address within person
value = person.address ['city'];    // 2nd method to display city variable within address within person
value = person.getBirthYear();      // displays birth year  - - then subtracts age from year

console.log(value);



const people = [
    {name: 'Segge', age: 30},
    {name: 'Steve', age: 31},
    {name: 'Kirst', age: 29}
];

//for each loop
for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

// prints out each name for each person in people