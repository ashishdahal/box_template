document.addEventListener("DOMContentLoaded",()=>{

//const box = {"color":"green"};
//const container = {"items":[{"type":box}]};
//let data = JSON.parse(JSON.stringify(container));

const templateContainer = ` <container id ="container" class = "container">container

<button id = "buttonContainer">buttonContainer</button>
<button id = "buttonBox" class = "buttons">buttonBox</button>

</container>`
const templateBox = `<div id = "box" class ="box">box</div>`

function buildBox(){

  document.getElementById("container").innerHTML += templateBox;

}



function buildContainer(){

  document.getElementById("container").innerHTML += templateContainer;


  var item = document.getElementsByTagName("container")[0];

  item.getElementsByTagName("button")[1].addEventListener("click",buildBox)

  item.getElementsByTagName("button")[0].addEventListener("click",buildContainer)

}


document.getElementById("buttonBox").addEventListener("click",buildBox)

document.getElementById("buttonContainer").addEventListener("click",buildContainer)


})

