jQuery(document).ready(function ($) {

  // Intro background carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
  });

  // Intro carousel (uses the Owl Carousel library)
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });
});

// check if stored data from register-form is equal to entered data in the login-form
function check() {
    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');
	var storedHOName = localStorage.getItem('HOName');
    var storedHOPw = localStorage.getItem('HOPassword');

    // entered data from the login-form
    var username1 = document.getElementById('inputName').value;
    var userpassword1 = document.getElementById('userPw').value;

    // check if stored data from register-form is equal to data from login form
    if(username1 == storedName && userpassword1 == storedPw) {
        alert('Login successfully as Applicant!');
		window.location = "residences.html"; // Redirecting to applicant page.
		return false;
    }else if( username1 == storedHOName && userpassword1 == storedHOPw){
		alert ("Login successfully as Housing Officer!");
		window.location = "set_residences.html"; // Redirecting to housing officer page.
		return false;
	}else if( username1 != storedName || userpassword1 != storedPw){
		alert ("Your username or password is wrong!"); //Validate Applicanr's input
		return false;
	} else if( username1 != storedHOName || userpassword1 != storedHOPw){
		alert ("Your username or password is wrong!"); //Validate Housing Officer's input
		return false;
	}
}

//validate the username and password
function validation(){
	var checkName = document.getElementById("inputName").value;
	var checkPw = document.getElementById("userPw").value;
	
	if(checkName == ""){
		document.getElementById("inputName").style.border = "solid red";
	} else{
		document.getElementById("inputName").style.border = "solid green";
	}
	
	if(checkPw == ""){
		document.getElementById("userPw").style.border = "solid red";
	} else{
		document.getElementById("userPw").style.border = "solid green";
	}
}

//show password
function showPassword() {
  var x = document.getElementById("userPw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
