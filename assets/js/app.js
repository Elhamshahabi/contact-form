// select elements
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const massage = document.querySelector("#massage");
const consent = document.querySelector("#consent");
const contactForm = document.querySelector("#contact-form");

// select error elm
const fullNameErrEl = document.querySelector("#fullNameErr");
const emailErrEl = document.querySelector("#emailErr");
const msgErrEl = document.querySelector("#msgErr");
const consentErrEl = document.querySelector("#consentErr");

contactForm.addEventListener("submit", (e) => {
  // az reload safhe jlo giri mikone
  e.preventDefault();

  // validet fullName
  if (fullName.value == "" || fullName.value.length < 3) {
    fullNameErrEl.textContent = "this field is required";
  } else {
    fullNameErrEl.textContent = "";
  }

  // validet Email
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value == "") {
    emailErrEl.textContent = "this field is required";
  } else {
    if (!email.value.match(validRegex)) {
      emailErrEl.textContent = "Email is not valid !";
    } else {
      emailErrEl.textContent = "";
    }
  }

  // message
  if (massage.value == "" || massage.value.length < 5) {
    msgErrEl.textContent = "this field is required";
  } else {
    msgErrEl.textContent = "";
  }

  // consent
  if (!consent.checked) {
    consentErrEl.textContent = "this field is required";
  } else {
    consentErrEl.textContent = "";
  }
});
