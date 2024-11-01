const boutonadd = document.getElementById("monbouton");
const sectionadd = document.getElementById("modal");
const exitbouton = document.getElementById("exit");

boutonadd.onclick = function (){
sectionadd.style.display = 'block';
}

exitbouton.onclick = function (){

  sectionadd.style.display="none" ;
}


// const modal = document.getElementById("modal");
// const form = modal.querySelector("form");
// let submitBtn = document.getElementById("submit");

// console.log(form)

// submitBtn.addEventListener("click", function() {
//     let title = document.getElementById("title").value;
//     let description = document.getElementById("description").value;

//     console.log(title, description)
// });



submit.onclick = function (){

    const tableau=[];
    const title1 = document.getElementById("titleinput").value;
const description1 = document.getElementById("descriptioninput").value;
const date1 = document.getElementById("dateinput").value;

// ce tableau stock les inputs entrées

tableau.push(title1,description1,date1);


// pour afficher ce qui est stocké

tableau.forEach((valeur) => {
    document.getElementById("containeradd").innerHTML += `<p>${valeur}</p>`;
  });



}


