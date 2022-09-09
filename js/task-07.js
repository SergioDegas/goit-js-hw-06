const fontSizeControl = document.querySelector('#font-size-control').addEventListener('input',sizeText);
const spanText = document.querySelector('#text')
function sizeText(event) {
    spanText.style.fontSize = event.currentTarget.value + "px";

}