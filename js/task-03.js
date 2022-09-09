const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");

// const imagesEl = images.map((images) => {
//   const elementLi = document.createElement("li");

//   const elementImg = document.createElement("img");
//   elementImg.setAttribute("src", images.url); ///////////
//   elementImg.setAttribute("alt", images.alt);
//   elementImg.style.width = '100px'
//   elementImg.style.height = "50px";

//   elementLi.append(elementImg);

//   // console.log(elementImg);
//   console.log(elementLi);

//   return elementLi;
// });
// galleryEl.append(...imagesEl);
// galleryEl.style.display = 'flex';
//   galleryEl.style.gap = "20px";

// console.log(galleryEl);
// elementLi.append(...imagesEl);
// console.log(imagesEl);
const imagesEl = images.map((image) => {
  const { url, alt } = image;
  return `<li><img  style="width: 300px; height: 250px;" src = '${url}'alt = '${alt}' /></li>`;
});

galleryEl.style.display = "flex";
galleryEl.style.gap = "20px";

// backgroundColor: 

galleryEl.insertAdjacentHTML("beforeend", imagesEl);
// console.log(galery);
