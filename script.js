function create() {
  for (let i = 0; i < 64*64; i++) {
    let box = document.querySelector(".box");
    const smallbox = document.createElement("div");
    smallbox.className = "smallbox";
    box.appendChild(smallbox);
  }
  window.addEventListener("mouseover",colorChange)
}
function colorChange(e){
    console.log(e);
    if (`${e.target.className}` == "smallbox"){
        e.target.classList.add('color');
    }
}
window.addEventListener("click",create);