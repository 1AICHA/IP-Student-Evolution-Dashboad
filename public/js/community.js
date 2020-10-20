(function () {
    "use strict";

    //globals
    let modal = document.getElementById('Modal1');
    //event listeners
    document.getElementById('openModal1').addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    document.querySelector('.close1').addEventListener('click', () => {
        modal.style.display = 'none';
    });
})();