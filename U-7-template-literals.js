//template Strings

const name = 'Jesse';
const age = 31;
const job = 'Web Developer';
const city = 'Columbus';
let greeting = 'Hello';
function printFunction(){
    return 'prints the function';
}

// Without template Strings (ES5 way)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li></ul>';

document.body.innerHTML = html;
html = '<ul>' +
    '<li>Name: ' + name + '</li>'
    '<li>Age: ' + age + '</li>'
    '<li>Job' + job + '</li>'
    '</ul>';

// With template strings (ES6 way)
//uses back-ticks
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>Addition: ${2+2}</li>
        <li>Call variable: ${greeting}</li>
        <li>Call function: ${printFunction()}</li>
        <li>${age > 30 ? 'Age is Over 30': 'Under 30'}
    </ul>
`;



document.body.innerHTML = html;