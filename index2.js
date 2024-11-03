let boutonadd = document.getElementById("monbouton");
let sectionadd = document.getElementById("modal");
let exitbouton = document.getElementById("exit");
let title = document.getElementById('titleinput');
let description = document.getElementById('descriptioninput');
let date = document.getElementById('dateinput');
let submit = document.getElementById('submit');
let statut =document.getElementById('statut');
let priority = document.getElementById('priority');
let tableaustocker1=[];
let tableaustocker2=[];
let tableaustocker3=[];




// afficher le modal

boutonadd.onclick = function (){
    sectionadd.style.display = 'block';
    }

// exit le modal

exitbouton.onclick = function (){
    sectionadd.style.display="none" ;
  }
  
// ------------------une fonction pour la section to do-------------------------

// on veut stocker les donnes dans un array 

function stocker1(){

let object1={
    title:title.value ,
    description:description.value ,
    date:date.value ,
priority:priority.value,
    }
    tableaustocker1.push(object1);

}

// on veut ajouter le task dans to do 





//------------------------------------------------------------------**************************************
function afficher1() {
    let table1 = "";

    for (let i = 0; i < tableaustocker1.length; i++) {
        // Détermine la couleur de la bordure en fonction de la priorité
        let borderColorClass = "";
        if (tableaustocker1[i].priority === "P1") {
            borderColorClass = "border-danger"; // Bordure rouge pour priorité P1
        } else if (tableaustocker1[i].priority === "P2") {
            borderColorClass = "border-primary"; // Bordure bleue pour priorité P2
        } else {
            borderColorClass = ""; // Pas de bordure spéciale pour les autres priorités
        }

        // Génère le HTML pour chaque tâche avec la classe de bordure correcte
        table1 += `
            <div class="tasks-container mt-2 border mt-3 w-75 ${borderColorClass}">
                <div id="color">
                    <div class="task px-4 py-2 w-100">
                        <h3>${tableaustocker1[i].title}</h3>
                        <p>${tableaustocker1[i].description}</p>
                        <p>${tableaustocker1[i].date}</p>
                        <button type="button" class="btn btn-danger btn-sm" onclick="removeTask(${i})">Delete</button>
                        <button type="button" class="btn btn-warning btn-sm">Edit</button>
                    </div>
                </div>
            </div>`;
    }

    // Insère le HTML généré dans le container
    document.getElementById('container1').innerHTML = table1;
}

// Fonction pour supprimer une tâche spécifique en fonction de son index
function removeTask(index) {
    tableaustocker1.splice(index, 1); // Supprime la tâche de l'array
    afficher1(); // Met à jour la liste affichée
}







//----------------------------------------------------------------------------*******************


 function modal1(){
    stocker1();
    afficher1();
}

//--------------------------------------------------------------------------------
// ------------------une fonction pour la section doi,g-------------------------

// on veut stocker les donnes dans un array 

function stocker2(){

    let object2={
        title:title.value ,
        description:description.value ,
        date:date.value ,
        }
        tableaustocker2.push(object2);
    
    }
    
    // on veut ajouter le task dans to do 

    //----------------------------------------------------------------****************
    function afficher2() {
        let table2 = "";
    
        for (let i = 0; i < tableaustocker2.length; i++) {
            // Détermine la couleur de la bordure en fonction de la priorité
            let borderColorClass = "";
            if (tableaustocker2[i].priority === "P1") {
                borderColorClass = "border-danger"; // Bordure rouge pour priorité P1
            } else if (tableaustocker2[i].priority === "P2") {
                borderColorClass = "border-primary"; // Bordure bleue pour priorité P2
            } else {
                borderColorClass = ""; // Pas de bordure spéciale pour les autres priorités
            }
    
            // Génère le HTML pour chaque tâche avec la classe de bordure correcte
            table2 += `
                <div class="tasks-container mt-2 border mt-3 w-75 ${borderColorClass}">
                    <div id="color">
                        <div class="task px-4 py-2 w-100">
                            <h3>${tableaustocker2[i].title}</h3>
                            <p>${tableaustocker2[i].description}</p>
                            <p>${tableaustocker2[i].date}</p>
                            <button type="button" class="btn btn-danger btn-sm" onclick="removeTask(${i})">Delete</button>
                            <button type="button" class="btn btn-warning btn-sm">Edit</button>
                        </div>
                    </div>
                </div>`;
        }
    
        // Insère le HTML généré dans le container
        document.getElementById('container2').innerHTML = table2;
    }
    
    // Fonction pour supprimer une tâche spécifique en fonction de son index
    function removeTask(index) {
        tableaustocker1.splice(index, 1); // Supprime la tâche de l'array
        afficher2(); // Met à jour la liste affichée
    }
    


    //_________________________________________________
     function modal2(){
        stocker2();
        afficher2();
    
    }

//-----------------------------------------------------------------------------
// ------------------une fonction pour la section done------------------------

// on veut stocker les donnes dans un array 

function stocker3(){

    let object3={
        title:title.value ,
        description:description.value ,
        date:date.value ,
        }
        tableaustocker3.push(object3);
    
    }
    
    // on veut ajouter le task dans to do 
    function afficher3(){
    let table3="";
    for(let i=0 ; i<tableaustocker3.length; i++){
        table3+=`
    <div class=" tasks-container  mt-2 border mt-3 w-75" >
                        <div class="task px-4 py-2 w-100">
                                <h3>${tableaustocker3[i].title}</h3>
                                <p>${tableaustocker3[i].description}</p>
                                <p>${tableaustocker3[i].date}</p>
                                <button type="button" id="remove" class="btn btn-danger btn-sm">Delet</button>
                                <button type="button" class="btn btn-warning btn-sm">Edit</button>
                      </div> 
                 </div>  
    `;
    document.getElementById('container3').innerHTML=table3;
    
    }
    }
     function modal3(){
        stocker3();
        afficher3();
    
    }
//-------------------------------------------------------------------------

// les condtions du status et vider les inputs :

submit.onclick = function() {
    if (statut.value === 'todo') {
        modal1();
    } else if (statut.value === 'doing') {
        modal2();
    } else {
        modal3();
    }
    sectionadd.style.display="none" ;


vider();

};
function vider() {
    title.value = '';
    description.value = '';
    date.value = '';
    statut.value = 'todo'; 
}
//---------------------------------------------------------------------------



