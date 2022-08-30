   /*changement de couleur */
function change() {
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var thergb = "rgb(" + x + "," + y + "," + z + ")";
    console.log(thergb, document.bloc.style.background);
    document.body.style.background = thergb;
}
function change() {
    var x = Math.floor(Math.random() * 256); // range is 0-255
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var thergb = "rgb(" + x + "," + y + "," + z + ")";
    console.log(thergb, document.bloc.style.background);
    document.body.style.background = thergb;
}
/*declaration de fonction affiche et afficher en defaut*/ 
function affiche(e) {
    e.preventDefault()
    console.log("cliquer");
    /*recuperer les donner et les comparer*/ 
    if (document.getElementById("prenom").value == "") {
        alert("veuillez entrer votre prenom!");
        document.getElementById('prenom').focus();
        return false;
    }
    /*stocker le donner valide */
    localStorage.setItem('Prenom', document.getElementById('prenom').value);
    if (document.getElementById("nom").value == "") {
        alert("veuillez entrer votre nom!");
        document.getElementById('nom').focus();
        return false;
    }
    localStorage.setItem('Nom', document.getElementById('nom').value);
    if (document.getElementById("email").value == "") {
        alert("veuillez entrer votre email");
        document.getElementById('email').focus();
        return false;
    }
         /*verifier de @ */
    if (document.getElementById("email").value.indexOf('@') == -1) {
        alert("ce n'est pas une  adresse electronique");
        document.getElementById('email').focus();
        return false;
    }
    /*stockage de @ et verification de commentaire */
    localStorage.setItem('Email', document.getElementById('email').value);
    if (document.getElementById('com').value == "") {
        alert("veuillez entrer vottre commentaire!");
        document.getElementById('com').focus();
        return false;
}
/*recuper les p et affiche ce qui etait stocker */
localStorage.setItem('Commentaire', document.getElementById('com').value);
document.getElementById('p1').innerHTML=localStorage.getItem('Prenom');
document.getElementById('p2').innerHTML=localStorage.getItem('Nom');
document.getElementById('p3').innerHTML=localStorage.getItem('Email');
document.getElementById('p4').innerHTML=localStorage.getItem('Commentaire');
}
/*fonction ,recupere le boutton */
/*si on entend le click,affiche les stocks du fonction affiche  */
const envoyer=document.getElementById("envoyer")
envoyer.addEventListener("click",affiche)

