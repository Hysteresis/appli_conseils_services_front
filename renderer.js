const { ipcRenderer } = require('electron');
const token = localStorage.getItem('token'); 
console.log('general renderer js')

// ! GESTION des clics pour changer de page
document.querySelector('#ad')
    .addEventListener('click', () => {
        ipcRenderer.send('page-ad');
    });

// ! GESTION des clics
document.querySelector('#page_3')
.addEventListener('click', () => {
    ipcRenderer.send('page_3');
});

console.log('On est avant!')

