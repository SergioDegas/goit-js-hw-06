const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  

];
const ingredientsEl = document.querySelector("#ingredients");
// console.log("🚀 ~ file: task-02.js ~ line 12 ~ ingredientsEl", ingredientsEl)
const elements = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  return element;
})
// console.log(elements);
ingredientsEl.append(...elements);
