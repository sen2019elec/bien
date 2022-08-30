

    
      
    /*creation de fonction et des variables pour recuperer les donner*/
  function changer(){
    var b=document.querySelectorAll(".bloc");
    var t=document.querySelectorAll(".tron");
   /*boucle qui permet de parcouris les cases*/
    for(i=0;i<b.length;i++)
    {
      b[i].classList.toggle("fall");
      t[i].classList.toggle("fall2");
    }

  }
      /*recuperation des donner*/
   function affiche(){
    if(document.getElementById('nom').value==""){
      alert("saisie votre nom!");
      document.getElementById('nom').focus();
      return false;
    }
    localStorage.setItem('Nom',document.getElementById('nom').value);
    if(document.getElementById('prenom').value==""){
      alert("saisie votre prenom!");
      document.getElementById('prenom').focus();
      return false;
    }
  
    localStorage.setItem('Prenom',document.getElementById('prenom').value);
    if(document.getElementById('e-mail').value==""){
      alert("saisie votre mail!");
      document.getElementById('e-mail').focus();
      return false;
    }
    if(document.getElementById('e-mail').value.indexOf('@')==-1){
      alert("ce n'est pas une adresse electrionique!");
      document.getElementById('e-mail').focus();
      return false;
    }
    localStorage.setItem('E-Mail',document.getElementById('e-mail').value);
    if(document.getElementById('com').value==""){
      alert("saisie votre msg!");
      document.getElementById('com').focus();
      return false;
    }
/*affichage des donnes recuperes*/
    localStorage.setItem('msg',document.getElementById('com').value);
    document.getElementById('p1').innerHTML=localStorage.getItem('Nom');
    document.getElementById('p2').innerHTML=localStorage.getItem('Prenom');
    document.getElementById('p3').innerHTML=localStorage.getItem('E-Mail');
    document.getElementById('p4').innerHTML=localStorage.getItem('msg');
   }
  
  
