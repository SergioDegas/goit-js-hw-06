// const fontSizeControl = document.querySelector('#font-size-control').addEventListener('input',sizeText);
// const spanText = document.querySelector('#text')
// function sizeText(event) {
//     spanText.style.fontSize = event.currentTarget.value + "px";

// }
let inputEl = document.querySelector("#font-size-control");
let spanEl = document.querySelector("#text");
spanEl.style.fontSize = "56px";
inputEl.addEventListener("input", (event) => {
      
          (spanEl.style.fontSize = `${Number(event.target.value)}px`);
   
});
 console.dir(inputEl);