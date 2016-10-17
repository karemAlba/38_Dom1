function validateForm(){
	var name = document.getElementById('name').value ;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	
	if( name == "" ) {
  		alert("Nombre no puede estar vacio o debe ser un caracter valido");
  		return false;
	}else if(!/^[a-zA-Z]*$/g.test(document.getElementById('name').value)){
		alert("El nombre tiene que tener solo letras");
		return false;
	}
	if(/[a-z]/.test(name)[0] || /[a-z]/.test(lastname[0])){
		alert ("La primera letra debe ser mayuscula");
		return false;
	}
	if( lastname == "" ) {
  		alert("Apellido no puede estar vacio");
  		return false;
	}else if(!/^[a-zA-Z]*$/g.test(document.getElementById('lastname').value)){
		alert("El Apellido tiene que tener solo letras");
		return false;
	}
	if( email == "" ) {
  		alert("Email no puede estar vacio");
  		return false;
	}
	if( password == "" ) {
  		alert("Contraseña no puede estar vacio");
  		return false;
	}else if(password.length < 6){
		alert("La contraseña debe conterner al menos 6 caracteres");
		return false;
	}else if (password == "password" || password == 123456 || password == 0987654){
		alert("Contraseña no valida");
		return false;
	}

}