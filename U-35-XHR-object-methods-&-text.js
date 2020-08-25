document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open - specify - type of request, from, synch
    xhr.open('GET', 'data35.txt', true);

    // xhr.onload= function(){
    //     if(this.status === 200){
    //         console.log(this.responseText);
    //     }
    // }

    // console.log('READYSTATE', xhr.readyState); ---- = 1 :server connection established

    // Optional - Used for spinners/loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState); // --- 3: processing request
    }

    xhr.onload = function () {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseTExt);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1`
        }
    }

    xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }
    xhr.onerror = function () {
        console.log('Error');
    }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    // HTTP Statuses
    // 200: ok
    // 403: forbidden
    // 404: not found
}