const words = ["Websites","Business Platforms","Modern Interfaces"]

let i=0
let j=0
let current=""
let deleting=false

function type(){

current = words[i]

let element = document.getElementById("typing")

if(deleting){

element.textContent = current.substring(0,j--)

}else{

element.textContent = current.substring(0,j++)

}

if(!deleting && j===current.length){

deleting=true
setTimeout(type,1000)
return

}

if(deleting && j===0){

deleting=false
i=(i+1)%words.length

}

setTimeout(type,100)

}

type()


const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});