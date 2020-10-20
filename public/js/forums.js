(function () {
    "use strict";

    //globals
    // let modal = document.getElementById('loginModal');


    // function login() {
    //     let email = document.getElementById('email').value;
    //     let password = document.getElementById('pass').value;
    //     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    //         let errorCode = error.code;
    //         let errorMessage = error.message;
    //         console.log(errorCode, errorMessage)
    //     });
    // }

    // function logout() {
    //     firebase.auth().signOut().then(function () {
    //         console.log('User Logged Out!');
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    // }

    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         let email = user.email;
    //         document.getElementById('uName').innerHTML = email;
    //         modal.style.display = 'none';
    //         document.getElementById('loginModalButton').classList.add('hidden');
    //         document.getElementById('logoutModalButton').classList.remove('hidden');
    //     } else {
    //         document.getElementById('loginModalButton').classList.remove('hidden');
    //         document.getElementById('logoutModalButton').classList.add('hidden');
    //         document.getElementById('uName').innerHTML = 'Sign in here:';
    //     }
    // });

    // //event listeners
    // document.getElementById('loginModalButton').addEventListener('click', () => {
    //     modal.style.display = 'flex';
    // });

    // document.querySelector('.close').addEventListener('click', () => {
    //     modal.style.display = 'none';
    // });

    // document.getElementById('login').addEventListener('click', () => {
    //     login();
    // });

    // document.getElementById('logoutModalButton').addEventListener('click', () => {
    //     logout();
    // });
    var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
  };




    let showCreatePostBtn = document.getElementById('showCreatePostBtn');
    let x = document.getElementById("showCreatePost");
    let hidden = true;
    let showAnnuleerBtn = document.getElementById('showAnnuleerBtn');
    let submitBtn = document.getElementById('submitBtn');

    showCreatePostBtn.addEventListener('click', function() {
        
          if (x.style.display = "none") {
          x.style.display = "block";
          showCreatePostBtn.style.display = 'none';
          showAnnuleerBtn.style.visibility = 'visible';
          hidden = false;
        }   
    });

    showAnnuleerBtn.addEventListener('click', function() {

      if (x.style.display = "inline-block") {
          x.style.display = "none";
          showAnnuleerBtn.style.visibility = 'hidden';
          showCreatePostBtn.style.display = 'inline-block';
        }
    });

    submitBtn.addEventListener('click', function() {

      if (x.style.display = "inline-block") {
          x.style.display = "none";
          showAnnuleerBtn.style.visibility = 'hidden';
          showCreatePostBtn.style.display = 'inline-block';
        }
        alert("Er is iets misgelopen met het posten. Probeer later opnieuw");
    });

    let gesorteerdOp = document.getElementById('gesorteerdOp');
    let gefilterdOp = document.getElementById('gefilterdOp');
    let relevantie = document.getElementById('relevantie');
    let nieuwste = document.getElementById('nieuwste');
    let oudste = document.getElementById('oudste');
    let likes = document.getElementById('likes');
    let reacties = document.getElementById('reacties');
    let nuPopulair = document.getElementById('nuPopulair');
    let geenFilter = document.getElementById('geenFilter');
    let vraag = document.getElementById('vraag');
    let samenvatting = document.getElementById('samenvatting');
    let idee = document.getElementById('idee');
    let poll = document.getElementById('poll');
    let mededeling = document.getElementById('mededeling');
    let andere = document.getElementById('andere');
    let vraag1 = document.getElementById('vraag1');
    let vragen = document.getElementById('vragen');
    let posts = document.querySelector('.postBlock');
    let noPosts = document.getElementById('noPosts');
    let samenvatting1 = document.getElementById('samenvatting1');

    relevantie.addEventListener('click', function(e) {
        gesorteerdOp.innerHTML = "Relevantie";
    });
    nieuwste.addEventListener('click', function(e) {
        gesorteerdOp.innerHTML = "Nieuwste";
    });
    oudste.addEventListener('click', function(e) {
        gesorteerdOp.innerHTML = "Oudste";
    });
    likes.addEventListener('click', function(e) {
        gesorteerdOp.innerHTML = "Meeste Likes";
    });
    reacties.addEventListener('click', function(e) {
        gesorteerdOp.innerHTML = "Meeste Reacties";
    });
    nuPopulair.addEventListener('click', function(e) {
        gesorteerdOp.innerHTML = "Nu Populair";
    });
    geenFilter.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Niets";
        noPosts.innerHTML = "";
        posts.style.display = "inline-block";
        samenvatting1.style.display = "inline-block";
    });
    vraag.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Vragen";
        /*if(hasClass(posts, vragen)) {
        console.log('ok')}*/
        samenvatting1.style.display = "none";
        noPosts.innerHTML = "";
        vraag1.style.display = "inline-block";
    
    });
    samenvatting.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Samenvattingen";
        samenvatting1.style.display = "inline-block";
        vraag1.style.display = "none";
        noPosts.innerHTML = "";
    });
    idee.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Ideeën";
        posts.style.display = "none";
        noPosts.innerHTML = "Er zijn momenteel nog geen ideeën";
        samenvatting1.style.display = "none";
    });
    poll.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Polls";
        posts.style.display = "none";
        noPosts.innerHTML = "Er zijn momenteel nog geen polls";
        samenvatting1.style.display = "none";
    });
    mededeling.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Mededelingen";
        posts.style.display = "none";
        noPosts.innerHTML = "Er zijn momenteel nog geen mededelingen";
        samenvatting1.style.display = "none";
    });
    andere.addEventListener('click', function(e) {
        gefilterdOp.innerHTML = "Andere";
        posts.style.display = "none";
        noPosts.innerHTML = "Er zijn zijn momenteel nog geen posts in 'Andere'";
        samenvatting1.style.display = "none";
    });




})();