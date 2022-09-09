const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', inputBlur);


function inputBlur() {
    
    if (this.getAttribute("data-length") > this.value.length) {
        this.classList.remove("valid");
        this.classList.add("invalid");
     
    }
    else {
        this.classList.remove("invalid");
        this.classList.add("valid");
    }
}





// classList.replace(old, new)




























