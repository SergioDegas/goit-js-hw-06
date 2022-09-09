let imputEl = document.querySelector('#name-input');
let spanEl = document.querySelector("#name-output");


imputEl.addEventListener('input', imputCange);


function imputCange(event) {
  // event.currentTarget.value;
//   console.log(event);
  // event.currentTarget.value;
  spanEl.textContent = event.currentTarget.value;
    
}

    // console.log(imputEl);











