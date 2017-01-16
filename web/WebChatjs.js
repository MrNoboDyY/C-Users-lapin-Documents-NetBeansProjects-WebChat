/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






var connexionClient = new WebSocket("ws://localhost:8080/WebChat/chat");


//si erreur de connexion !!
connexionClient.onerror = function (event) {
    alert("Erreur de connexion");
};



//a l'ouverture de la connexion!!
//envoi du bonjour dès la connexion
connexionClient.onopen = function (event) {
    //alert("Data " + event);
    connexionClient.send("Bonjour,merci de choisir un pseudo :");
};

//a l'evenement "keypress" apres le message
connexionClient.onmessage = function (event) {
    //alert("Message : " + event.data); 
    document.getElementById("zone").innerHTML += event.data + "\n";
};

//fonction envoyer liée a l'evenenemnt sur le "keypress" apres le message !!
function envoyer(event) {
    //on range l'input/messageSaisi dans une variable grace a son id:"sasie"
    var messageSaisi = document.getElementById("saisie");
    var pseud = document.getElementById("username") ;

    //la valeur du texte saisie !!!
    var texte = messageSaisi.value;
    var psd = pseud.value;

    //envoi du messageSaisi avec la touche "ENTREE"!!!
    if (event.keyCode === 13) {//touche entrée pressée 

        //envoi de la valeur da l'input/messageSaisi + pseudo !!!
        connexionClient.send(psd + ":" + texte);
        messageSaisi.value = "";//remise a zéro de l'input après l'envoi
    }

}








