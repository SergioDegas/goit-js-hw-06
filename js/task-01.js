const categories = document.querySelector('#categories');
// console.log(categories);
// const allItems = categories.querySelectorAll('.item');
// console.log("Number of categories:", allItems.length);

// const itemAnimals = categories.children[0]; ;
// const titleAnimals = itemAnimals.firstElementChild;
// console.log("Category:", titleAnimals);

// const listAnimals = itemAnimals.lastElementChild; ;
// const ItemAnimals = listAnimals.querySelectorAll("li"); 
// console.log("Elements:", ItemAnimals.length);


// /////////////////////////////////
// const itemProducts = categories.children[1];
// const titleProducts = itemProducts.firstElementChild;
// console.log("Category:", titleProducts);

// const listProducts = itemProducts.lastElementChild;
// const ItemProducts = listProducts.querySelectorAll("li");
// console.log("Elements:", ItemProducts.length);


// ///////////////////////////////
// const itemTechnologies = categories.children[2];
// const titleTechnologies = itemTechnologies.firstElementChild;
// console.log("Category:", titleTechnologies);

// const listTechnologies = itemTechnologies.lastElementChild;
// const ItemTechnologies = listTechnologies.querySelectorAll("li");
// console.log("Elements:", ItemTechnologies.length);

console.log('Number of categories:',categories.children.length);
const allItems = document.querySelectorAll(".item");
allItems.forEach(function categoria (element) {
//   element.firstElementChild;
    console.log('Category:', element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
})

