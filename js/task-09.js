function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const spanText = document.querySelector('.color')
const btn = document.querySelector('.change-color')
btn.addEventListener("click", clickBtn);
function clickBtn() {
  body.style.backgroundColor = getRandomHexColor();
spanText.textContent = getRandomHexColor()
  
}


// backgroundColor: 


