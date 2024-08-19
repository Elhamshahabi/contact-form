// select elements
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const massage = document.querySelector("#massage");
const consent = document.querySelector("#consent");
const contactForm = document.querySelector("#contact-form");
const querytypes = document.getElementsByName("query");
console.log(querytypes);

// select error elm
const fullNameErrEl = document.querySelector("#fullNameErr");
const emailErrEl = document.querySelector("#emailErr");
const msgErrEl = document.querySelector("#msgErr");
const consentErrEl = document.querySelector("#consentErr");
const queryErrEl = document.querySelector("#queryErr");

contactForm.addEventListener("submit", (e) => {
  // az reload safhe jlo giri mikone
  e.preventDefault();
  const data = {};
  // validet fullName
  if (fullName.value == "" || fullName.value.length < 3) {
    fullNameErrEl.textContent = "this field is required";
  } else {
    fullNameErrEl.textContent = "";
    data.fullName = fullName.value;
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
      data.email = email.value;
    }
  }

  // message
  if (massage.value == "" || massage.value.length < 5) {
    msgErrEl.textContent = "this field is required";
  } else {
    msgErrEl.textContent = "";
    data.massage = massage.value;
  }

  // consent
  if (!consent.checked) {
    consentErrEl.textContent = "this field is required";
  } else {
    consentErrEl.textContent = "";
    data.consent = consent.value;
  }

  //   query type
  let itemChecked = null;
  querytypes.forEach((item) => {
    if (item.checked) {
      itemChecked = item;
    }
  });
  if (!itemChecked) {
    queryErrEl.textContent = "this field is required";
  } else {
    queryErrEl.textContent = "";
    data.queryType = itemChecked.value;
  }

  if (
    data.fullName &&
    data.consent &&
    data.email &&
    data.massage &&
    data.queryType
  ) {
    console.log(data);
    resetForm();
  }
});


function resetForm() {
   fullName.value = email.value = massage.value = "";
   contactForm.reset();
}