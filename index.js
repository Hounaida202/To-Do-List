let boutonadd = document.getElementById("monbouton");
let sectionadd = document.getElementById("modal");
let exitbouton = document.getElementById("exit");
let title = document.getElementById('titleinput');
let description = document.getElementById('descriptioninput');
let date = document.getElementById('dateinput');
let submit = document.getElementById('submit');
let status =document.getElementById('status');






boutonadd.onclick = function (){
sectionadd.style.display = 'block';
}

exitbouton.onclick = function (){

  sectionadd.style.display="none" ;
}

status.addEventListener('change', function () {

  if (status.value === 'todo') {
      submit.onclick = todo;
  } else if (status.value === 'doing') {
      submit.onclick = inprogress;
  } else {
      submit.onclick = done;
  }
  
});





///--------------------------------------------fonction to do ------------------------------------------
////// fonction pour stocker

let tableaustocker1=[];

function todo(){

let object={
title:title.value ,
description:description.value ,
date:date.value ,
}
tableaustocker1.push(object)

clear1();
afficher1();
sortir1();
}

////////// fonction clear

function clear1 () {
title.value="";
description.value="";
date.value="";

}


///////// fonction pour afficher les donnés 

function afficher1(){  
let table=""; /// a appeler dans innerhtml
for(let i=0 ; i<tableaustocker1.length; i++){
table+=`
<div class=" tasks-container  mt-2 border mt-3 w-75" id="to-do-container" >
                 <div class=" border-start border-danger border-5 "> 
                    <div class="task px-4 py-2 w-100">
                        <div id="containeradd">
                            <h3>${tableaustocker1[i].title}</h3>
                            <p>${tableaustocker1[i].description}</p>
                            <p>${tableaustocker1[i].date}</p>
                            <button type="button" class="btn btn-danger btn-sm">Delet</button>
                            <button type="button" class="btn btn-warning btn-sm">Edit</button>
                        </div>
                  </div> 
                </div>
             </div>  
`;
document.getElementById('container1').innerHTML=table;
}
}

// fonction pour sortir apres ajouter 

function sortir1(){

  sectionadd.style.display="none" ;

}



///--------------------------------------------fonction in progress ------------------------------------------


  let tableaustocker2=[];

  function inprogress(){
  
  let object={
  title:title.value ,
  description:description.value ,
  date:date.value ,
  }
  tableaustocker2.push(object)
  
  clear2();
  afficher2();
  sortir2();
  }
  
  ////////// fonction clear
  
  function clear2 () {
  title.value="";
  description.value="";
  date.value="";
  
  }
  
  
  ///////// fonction pour afficher les donnés 
  
  function afficher2(){  
  let table=""; /// a appeler dans innerhtml
  for(let i=0 ; i<tableaustocker2.length; i++){
  table+=`
  <div class=" tasks-container  mt-2 border mt-3 w-75" id="to-do-container" >
                   <div class=" border-start border-danger border-5 "> 
                      <div class="task px-4 py-2 w-100">
                          <div id="containeradd">
                              <h3>${tableaustocker2[i].title}</h3>
                              <p>${tableaustocker2[i].description}</p>
                              <p>${tableaustocker2[i].date}</p>
                              <button type="button" class="btn btn-danger btn-sm">Delet</button>
                              <button type="button" class="btn btn-warning btn-sm">Edit</button>
                          </div>
                    </div> 
                  </div>
               </div>  
  `;
  document.getElementById('container2').innerHTML=table;
  }
  }
  
  // fonction pour sortir apres ajouter 
  
  function sortir2(){
  
    sectionadd.style.display="none" ;
  
  }
  
  

///--------------------------------------------fonction done ------------------------------------------


    let tableaustocker3=[];




    function done(){
    
    let object={
    title:title.value ,
    description:description.value ,
    date:date.value ,
    }
    tableaustocker3.push(object)
    
    clear3();
    afficher3();
    sortir3();
    }
    
    ////////// fonction clear
    
    function clear3 () {
    title.value="";
    description.value="";
    date.value="";
    
    }
    
    
    ///////// fonction pour afficher les donnés 
    
    function afficher3(){  
    let table=""; /// a appeler dans innerhtml
    for(let i=0 ; i<tableaustocker3.length; i++){
    table+=`
    <div class=" tasks-container  mt-2 border mt-3 w-75" id="to-do-container" >
                     <div class=" border-start border-danger border-5 "> 
                        <div class="task px-4 py-2 w-100">
                            <div id="containeradd">
                                <h3>${tableaustocker3[i].title}</h3>
                                <p>${tableaustocker3[i].description}</p>
                                <p>${tableaustocker3[i].date}</p>
                                <button type="button" class="btn btn-danger btn-sm">Delet</button>
                                <button type="button" class="btn btn-warning btn-sm">Edit</button>
                            </div>
                      </div> 
                    </div>
                 </div>  
    `;
    document.getElementById('container3').innerHTML=table;
    }
    }
    
    // fonction pour sortir apres ajouter 
    
    function sortir3(){
    
      sectionadd.style.display="none" ;
    
    }

//------------------------------------------------------------------------------------------
  





