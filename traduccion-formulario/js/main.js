var idioma = "es";
var elTitulo = document.getElementById('form-signin-heading');
var elCorreo = document.getElementById('inputEmail');
var elPass = document.getElementById('inputPassword');
var elboton = document.getElementById('boton');
var elRecord = document.getElementById('Recuerda');

if(idioma === "es"){
	elTitulo.innerHTML = "Por favor inicia sesión";
	elCorreo.placeholder = "Correo Electronico";
	elPass.placeholder = "Contraseña";
	elboton.innerHTML = "Iniciar Sesión";
	elRecord.innerHTML = "Recordar datos";
}


