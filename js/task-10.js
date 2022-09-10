function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
const createBoxes = amount => {
	const createDiv = []
	for (let i = 0; i < amount; i+=1) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		createDiv.push(div);
	}
	return createDiv;
}

const destroyBoxes = () => {
	refs.boxes.innerHTML = ''
}

refs.btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(refs.input.value)
	boxes.append(...boxesToAdd)
})

console.log(refs.input.value);

refs.btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})
