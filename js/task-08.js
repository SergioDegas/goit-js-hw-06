const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);
// form.setAttribute('name', 'name')
const inputEl = form.querySelectorAll("input");
//  inputEl = form.children[1];
console.log(inputEl);
//    form.after(input.name)
// function formSubmit(event) {
//   event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         if (value === "") {
//           alert("Заповни пусты поля!");
//         } else {
//           console.log(name, value);
//         }

// })

// }

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповни пусті поля!");
  }


  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log("userData", userData);
form.reset();

}
// form.reset();


// const btn = document.querySelector('button')
// document.getElementById("input").reset(form);
// console.dir(btn);
// form.trigger("reset");
