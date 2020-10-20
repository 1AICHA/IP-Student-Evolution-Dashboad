(function () {
    "use strict";

    //scroll script
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("topbarID").style.top = "0";
        } else {
            document.getElementById("topbarID").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    //globals
    let modal = document.getElementById('loginModal');

    function login() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    function logout() {
        firebase.auth().signOut().then(function () {
            console.log('User Logged Out!');
        }).catch(function (error) {
            console.log(error);
        });
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            let email = user.email;
            document.getElementById('uName').innerHTML = email;
            modal.style.display = 'none';
            document.getElementById('loginModalButton').classList.add('hidden');
            document.getElementById('logoutModalButton').classList.remove('hidden');
        } else {
            document.getElementById('loginModalButton').classList.remove('hidden');
            document.getElementById('logoutModalButton').classList.add('hidden');
            document.getElementById('uName').innerHTML = 'Sign in here:';
        }
    });

    //event listeners
    document.getElementById('loginModalButton').addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.getElementById('login').addEventListener('click', () => {
        login();
    });

    document.getElementById('logoutModalButton').addEventListener('click', () => {
        logout();
    });
})();