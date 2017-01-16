/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// fonction pour valider le pseudo,avant le texte !!!!
$( document ).ready(function() {
    $('#username').keyup(function () {
   if($('#username').val().length > 0){
       $('#saisie').prop('disabled', false);
   } else {
       $('#saisie').prop('disabled', true);
   }
});
});

//$(document).ready(function(){
//    $('#exitchat').click(function (){
//        //alert(">>>>");
//     
//    });
//});