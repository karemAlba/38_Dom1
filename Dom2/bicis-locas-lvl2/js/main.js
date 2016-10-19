function validateForm(){
	var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //regex Inidica que es una expresion regular.
	var regexNombre = /^[A-Z][a-z]*$/;
	var name = document.getElementById("name").value
	var lastname = document.getElementById ("lastname").value;
	var mail = document.getElementById ("input-email").value; 
	var password = document.getElementById("input-password").value;
	var bici = document.getElementById("selecciona").selectedIndex;
	



	if(name == "" || lastname == "" || mail == "" || password == "" ){
		alert("Los campos no tienen que estar vacios");
		return;
	}


	var boxes = document.getElementsByClassName("input-box") 
	for (var i = 0; i < boxes.length; i++){ 
		console.log(boxes[i].lastChild.nodeName); 
		if (boxes[i].lastChild.nodeName === "SPAN")  //Elimina al hijo del padre.
		{
			boxes[i].removeChild(boxes[i].lastChild);
		}
	}
	
	
	if (!regexNombre.test(name)){ 
		var boxname = document.getElementById("boxname");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("La primer letra de tu nombre debe ser mayúscula"));
		boxname.appendChild(span);
		return;
	}
	if (!regexNombre.test(lastname)){
		var boxlastname = document.getElementById("boxlastname");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("La primer letra de tu apellido debe ser mayúscula"));
		boxlastname.appendChild(span);
	}
	if(!regexEmail.test(mail)){
		var boxmail = document.getElementById("boxmail");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("Escribe de nuevo tu mail"));
		boxmail.appendChild(span);
	}
	if(password.length < 6){
		var boxpswd = document.getElementById("boxpswd");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("Tu contraseña debe contener 6 caracteres"));
		boxpswd.appendChild(span);
	}
	if(bici == 0){
		var boxbici = document.getElementById("boxbici");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("Selecciona un elemento de la lista"));
		boxbici.appendChild(span);
	}
}