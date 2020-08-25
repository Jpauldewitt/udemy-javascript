document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customer -- singular
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    // getting information from local file:
    xhr.open('GET', 'customer36.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            //console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

// Load Customers - - Array
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    // getting information from local file:
    xhr.open('GET', 'customers36.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            //console.log(this.responseText);
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(function (customer) {
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                    `;
            });

            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}
