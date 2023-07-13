const { ipcRenderer } = require('electron');
console.log('====>  test/renderer js  <====  ')
document.querySelector('#home')
    .addEventListener('click', () => {
        ipcRenderer.send('page-home');
    });

    

    function citationLoad() {

        fetch( 'https://pokeapi.co/api/v2/pokemon/2',{
            headers: {
                'Accept': 'application/json',
                'Content': 'application/json'
            }
    
        }).then((response) => {
            return response.json();
    
        }).then((data) => {
            // textContent = JSON.stringify(data);
            console.log(data.forms[0].name)

            console.log(data.height)

            let pokemon_name = document.querySelector('#pokemon_name')
            pokemon_name.innerHTML = data.forms[0].name
            let pokemon_height = document.querySelector('#pokemon_height')
            pokemon_height.innerHTML = data.height
        })
    
    
    }
    

    citationLoad();


