const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;
  var error = "";

  if (name == "") {
      error += "Por favor insira seu nome.\n";
  }

  if (email == "") {
      error += "Por favor insira seu endereço de email.\n";
  } else if (!validateEmail(email)) {
      error += "Por favor insira um endereço de email válido.\n";
  }

  if (message == "") {
      error += "Por favor insira sua mensagem.\n";
  }

  if (error != "") {
      alert(error);
      return false;
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
