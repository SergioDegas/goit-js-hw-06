const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', inputBlur);


function inputBlur(event) {
    
    if (Number(inputEl.dataset.length) === this.value.length) {
      this.classList.remove("invalid");
      this.classList.add("valid");
    // console.log(this.value.length);

    } else {
      this.classList.remove("valid");
      this.classList.add("invalid");
    }
}


// inputEl.dataset.length;
// classList.replace(old, new)




























