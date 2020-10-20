(function() {
    'use strict';
  
      let wijzigProfielKaartKnop = document.getElementById('wijzigProfielKaart');
      let hideProfielWijzigFormKnop = document.getElementById('sluitenWijzigProfielDiv');
      let vnameIn = document.getElementById('vnaam');  
      let nameOut = document.getElementById('nameFinaal');
      let githubIn = document.getElementById('github');  
      let githubOut = document.getElementById('githubFinaal');
      let formProfiel = document.getElementById('wijzigenProfielForm');
      let anuleerWijzigProfielDiv = document.getElementById('AnuleerWijzigProfielDiv');
      let teamroltypePFKaart = document.getElementById('teamroltypePFKaart');
      let bewaardegegeven = document.getElementById('jeUniekeTeamRol'); 
      let bewaarTeamrol = document.getElementById('bewaarBtntTeamrol');
      let bewaarKaraktersterktes = document.getElementById('bewaarKaraktersterktes');
      let karaktersterktePFKaart = document.getElementById('GekozenIndividu');

  
      // bij klikken op knop div profiel tonen
      wijzigProfielKaartKnop.addEventListener('click', function() {

        var x = document.getElementById("wijzig_Profiel");
        if (x.style.display = "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        } 
        
      });


      // bij klikken op knop div profiel hiden + eventueel doorsturen naar db
      hideProfielWijzigFormKnop.addEventListener('click', function() {

        //Kijken of naam aangepast wordt
        if (vnameIn.value.length == 0){
          nameOut.innerHTML = "Tom Peeters"
        }else{
          nameOut.innerHTML = vnameIn.value;
        }
        //Kijken of git naam aangepast wordt
        if (githubIn.value.length == 0){
          githubOut.innerHTML = "1Tom";
        }else{
          githubOut.innerHTML = githubIn.value;
        }

        var x = document.getElementById("wijzig_Profiel");
        x.style.display = "none";
 
      });

      // bij klikken op knop worden de wijzigingen niet aangepast + venster gesloten
      anuleerWijzigProfielDiv.addEventListener('click', function() {

        var x = document.getElementById("wijzig_Profiel");
        x.style.display = "none";
 
      });


      //pagina niet laten herladen bij form
      function handleForm(event) { 
        event.preventDefault(); 
      } 
      formProfiel.addEventListener('submit', handleForm);


      //kijken welke karaktersterktes aangeklikt zijn
      let karakterSterkteArray = [];
      let karaktersterktes = document.querySelectorAll('.sterkte');
      karaktersterktes.forEach(sterkte =>  sterkte.addEventListener('click', function() {

        karakterSterkteArray.push(sterkte.dataset.sterktetype);
        console.log(karakterSterkteArray);

        document.getElementById('jeKarakterSterktes').innerHTML = karakterSterkteArray + "\n";
  
      }));

      //wanneer op de bewaar knop geduwd wordt, inhoud txt veld in kaart zetten
      bewaarKaraktersterktes.addEventListener('click', function() { 

        karaktersterktePFKaart.innerHTML = "&#8226;" + jeKarakterSterktes.innerHTML;
        jeKarakterSterktes.innerHTML = "";
      
      }); 
      


      //kijken welk teamroltype aangeklikt aangeklikt is + in txt veld zetten
      let teamrollen = document.querySelectorAll('.teamroltype');
      teamrollen.forEach(teamroltype =>  teamroltype.addEventListener('click', function() {

        let teamrolArray = [];
        teamrolArray.push(teamroltype.dataset.teamroltype);
        console.log(teamrolArray);

        //teamroltype.classList.add("active");

        document.getElementById('jeUniekeTeamRol').value = teamrolArray;
  
      }));
       
      //wanneer op de bewaar knop geduwd wordt, inhoud txt veld in kaart zetten
      bewaarTeamrol.addEventListener('click', function() {

        teamroltypePFKaart.innerHTML = "&#8226;" + bewaardegegeven.value;
        bewaardegegeven.value = "";

      }); 


      
    })();