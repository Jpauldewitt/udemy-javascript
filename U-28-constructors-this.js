// Constructors
// const brad = {
//     name: 'Brad', 
//     age: 30,
// }

// console.log(brad);

// Person constructor -- start with capital
function Person(name, age, dob){
    this.name = name;
    this.age = age;
    this.birthday = new Date(dob);      // constructor within constructor
    this.calculateAge = function(){
        const diff = Date.now()- this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() -1970);    // gives us year
    }
}

const brad = new Person('Brad', 36, '9-10-1981', );
const john = new Person('John', 36);
console.log(brad.calculateAge());

console.log(brad);