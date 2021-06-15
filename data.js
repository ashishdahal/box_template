document.addEventListener("DOMContentLoaded",()=>{

//const box = {"color":"green"};
//const container = {"items":[{"type":box}]};
//let data = JSON.parse(JSON.stringify(container));

const BuildButtonTemplate = `<button id="build" class = "build">build</button>`

const CbuttonTemplate = `<button id="buildContainer" class="buildContainer">buildContainer</button>`

const BbuttonTemplate = `<button id="buildBox" class="buildBox">buildBox</button>`

const containerTemplate = `<div id="containerTemplate" class = "container">container
</div>`

const boxTemplate =`<div id="boxTemplate" class = "box">box</div>`

document.getElementById("prime").innerHTML += BuildButtonTemplate;

function buildButtons(){
  document.getElementById("prime").innerHTML += containerTemplate;
  document.getElementById("containerTemplate").innerHTML += CbuttonTemplate;
  document.getElementById("containerTemplate").innerHTML += BbuttonTemplate;

  function bldCon(){
    document.getElementById("containerTemplate").innerHTML += containerTemplate;
    
    }
    
    document.getElementById("buildContainer").addEventListener("click", bldCon);


    function bldBox(){
     document.getElementById("containerTemplate").innerHTML += boxTemplate;
    }

    document.getElementById("buildBox").addEventListener("click", bldBox);


}

    document.getElementById("build").addEventListener("click", buildButtons);








console.log(data.items[1])





})

