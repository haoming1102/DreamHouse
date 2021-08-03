//Lee Hao Ming B1801011

//Validation
(function() {
'use strict';
window.addEventListener('load', function() {
	// Get the forms we want to add validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			}
			form.classList.add('was-validated')
		}, false);
	});
}, false);
})();

//show password
function showPassword() {
  var x = document.getElementById('password');
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// storing applicant's input from register-form
function store() {
	// Name and Password from the register-form
	var username = document.getElementById('username').value;
	var registerPassword = document.getElementById('password').value;
	//if value is undefined, prevent storing
	if (username != "" && registerPassword != ""){
		localStorage.setItem('username', username);
		localStorage.setItem('password', registerPassword);
	}
}


// storing housingofficer's input from register-form
function store1() {
	// Name and Password from the register-form
	var username = document.getElementById('username').value;
	var registerPassword = document.getElementById('password').value;
	//if value is undefined, prevent storing
	if (username != "" && registerPassword != ""){
		localStorage.setItem('HOName', username);
		localStorage.setItem('HOPassword', registerPassword);
	}
}


