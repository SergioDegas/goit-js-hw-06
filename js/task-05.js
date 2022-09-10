let imputEl = document.querySelector('#name-input');
let spanEl = document.querySelector("#name-output");


imputEl.addEventListener('input', imputCange);


function imputCange(event) {
  // event.currentTarget.value;
//   console.log(event);
  // event.currentTarget.value;
  // spanEl.textContent.preventDefault();
  spanEl.textContent = event.currentTarget.value;
     if (event.currentTarget.value === "") {
       spanEl.textContent = "Anonymous";
     }
}

    console.log(spanEl);











