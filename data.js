document.addEventListener("DOMContentLoaded",()=>{

const box = {"color":"green"};
const container = {"items":[{"type":box}]};
let data = JSON.parse(JSON.stringify(container));


const CbuttonTemplate = `<button id="buildContainer" onclick="bldCon()">buildContainer</button>`

const BbuttonTemplate = `<button id="buildBox" onclick="bldBox()">BuildBOX</button>`

const containerTemplate = `<div id="containerTemplate" class = "container">container
</div>`

const boxTemplate =`<div class = "box">box</div>`

document.getElementById("prime").innerHTML += CbuttonTemplate;



function bldCon(){

  document.getElementById("prime").innerHTML += CbuttonTemplate;
  document.getElementById("prime").innerHTML += BbuttonTemplate;
  document.getElementById("prime").innerHTML += containerTemplate;

};

function bldBox(){
 
 
  document.getElementById("containerTemplate").innerHTML += boxTemplate;

};

document.getElementById("buildContainer").addEventListener("click", bldCon());

document.getElementById("buildBox").addEventListener("click", bldBox());








console.log(data.items[1])





})

