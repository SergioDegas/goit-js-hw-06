const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);
const inputEl = form.querySelectorAll("input");
function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Заповни пусті поля!");
  }


  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log("userData", userData);
event.currentTarget.reset();

}
// form.reset();


// const btn = document.querySelector('button')
// document.getElementById("input").reset(form);
// console.dir(btn);
// form.trigger("reset");
