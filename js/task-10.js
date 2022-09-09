function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
console.log(refs);

refs.input.addEventListener("input", inputCurrentValue);
refs.btnCreate.addEventListener("click", createBox);
refs.btnDestroy.addEventListener("click", destroyBox);

function inputCurrentValue(event) {
  event.currentTarget.value;
}
function createBox() {
  for (let i = 0; i < refs.input.value; i += 1) {
    const create = `<div style = "background-color: ${getRandomHexColor()};
 width: ${30 + i * 10}px;
height: ${30 + i * 10}px"></div>`;
    refs.boxes.insertAdjacentHTML("beforeend", create);
    
  }
}
function destroyBox() {
   refs.boxes.innerHTML = "";
}


console.log(refs.boxes);
