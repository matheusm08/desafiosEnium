document.getElementById("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const phone = document.getElementById("phone").value;
  })
});

function phoneMaskBrazil() {
  var key = window.event.key;
  var element = window.event.target;
  var isAllowed = /\d|Backspace|Tab/;
  if (!isAllowed.test(key)) window.event.preventDefault();

  var inputValue = element.value; 
  inputValue = inputValue.replace(/\D/g, "");
  inputValue = inputValue.replace(/(^\d{2})(\d)/, "($1) $2");
  inputValue = inputValue.replace(/(\d{4,5})(\d{4}$)/, "$1-$2");

  element.value = inputValue;
};

function alertFunc() {
  alert('Formulario enviado');
};