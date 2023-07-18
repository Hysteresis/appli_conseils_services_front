

let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value
    console.log('Avant le fetch')
    fetch("https://localhost:8000/api/login_check",{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({"username": username, "password": password})
    })
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data)
        localStorage.setItem('token', data.token);
    }) 
})

export const token = localStorage.getItem('token');

