function create(gridsize) {
    let box = document.querySelector(".box");
    const bigbox = document.createElement("div");
    bigbox.className = "bigbox";
    box.appendChild(bigbox);
    for (let i = 0; i < gridsize*gridsize; i++) {
      const smallbox = document.createElement("div");
      smallbox.className = "smallbox";
      bigbox.appendChild(smallbox);
      smallbox.setAttribute('style','height:px;width:8px');
    }
  window.addEventListener("mouseover", colorChange);
}
function colorChange(e) {
  console.log(e);
  if (`${e.target.className}` == "smallbox") {
    e.target.classList.add("color");
  }
}
function change(){
  let gridsize = prompt("Please enter grid size within 100:");
  if (gridsize == null || gridsize == "") {
    text = "Please enter valid number.";
    change();
  } else {
    let box = document.querySelector(".box");
    let bigbox = document.querySelector(".bigbox");
    box.removeChild(bigbox);
    create(gridsize);
  }
}
window.onload = () => {
  create(40)
}