const { ipcRenderer } = require('electron');
import token from '../../../login.js';

console.log('====>  test/renderer js  <====  ')
document.querySelector('#home')
    .addEventListener('click', () => {
        ipcRenderer.send('page-home');
    });

    

function citationLoad() {

    fetch( 'https://localhost:8000/api/annonces/1',{
        headers: {
            'Accept': 'application/json',
            'Content': 'application/json',
            'Authorization': 'Bearer ' + token
        }

    }).then((response) => {
        return response.json();

    }).then((data) => {

        console.log(data.title)
        console.log(data.description)

        let title = document.querySelector('#title')
        title.innerHTML = data.title
        let description = document.querySelector('#description')
        description.innerHTML = data.description
        let degree = document.querySelector('#degree')
        degree.innerHTML = data.degree
        
    })
}


citationLoad();


