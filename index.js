const bouton = document.getElementById("monbouton");
const section = document.getElementById("modal");

bouton.addEventListener("click",function(){

if(section.style.display === "none"){
section.style.display = "block";

}
else{
section.style.display= "none";

bouton.textContent = "Afficher la section"; 


}







})
