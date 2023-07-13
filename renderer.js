const { ipcRenderer } = require('electron');
console.log('general renderer js')
document.querySelector('#test')
    .addEventListener('click', () => {
        ipcRenderer.send('page-test');
    });


document.querySelector('#page_3')
.addEventListener('click', () => {
    ipcRenderer.send('page_3');
});



