function create(gridsize) {
  let box = document.querySelector(".box");
  const bigbox = document.createElement("div");
  bigbox.className = "bigbox";
  box.appendChild(bigbox);
  for (let i = 0; i < gridsize * gridsize; i++) {
    const smallbox = document.createElement("div");
    smallbox.className = "smallbox";
    bigbox.appendChild(smallbox);
    let a = 400 / gridsize - 2;
    let b = 400 / gridsize - 2;
    smallbox.setAttribute("style", "height:" + a + "px;width:" + b + "px");
  }
  window.addEventListener("mouseover", colorChange);
}
function colorChange(e) {
  console.log(e);
  if (`${e.target.className}` == "smallbox") {
    e.target.classList.add("color");
  }
}
function changebutton() {
  let gridsize = prompt("Please enter grid size within 100:");
  if (gridsize == null || gridsize == "" || gridsize>100) {
    changebutton();
  } else {
    changegrid(gridsize);
  }
}
function changegrid(gridsize=40) {
  let box = document.querySelector(".box");
  let bigbox = document.querySelector(".bigbox");
  box.removeChild(bigbox);
  create(gridsize);
}
window.onload = () => {
  create(40);
};
