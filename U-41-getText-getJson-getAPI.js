document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// get local text file data
function getText() {
    fetch('text.txt')
    //method with regular function
        // .then(function (res) {
        .then(res => res.text())
        // .then(function (data) {
        .then(data =>{
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        //.catch(function (err) {
        //console.log(err);
        .catch(err => console.log(err));
        //});
}

// get local json data
function getJson() {
    // fetch name of file
    fetch('posts.json')
        // .then(function (res) {
            .then(res => res.json())
            // res.file type
            //return res.json();
        //})
        //.then(function (data) {
            .then(data =>{
            console.log(data);
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        //.catch(function (err) {
            //console.log(err);
        .catch (err => console.log(err));
       // });
}

// get external API
function getExternal() {
    // fetch api url
    fetch('https://api.github.com/users')
        //.then(function (res) {
            //return res.json();
        //})
        .then(res => res.json())
        //.then(function (data) {
            .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        //.catch(function (err) {
          //  console.log(err);
       // });
       .catch (err=> console.log(err));
}