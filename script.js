function alertFunc() {
    phonenumber()
    alert('Formulario enviado');
}
function phonenumber(phone) {
  var phoneno = /(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})/gm;
  if (phone.value.match(phoneno)){
      return true, alertFunc();
    }else {
        alert("Número de telefone inválido");
        return false;
        }
}