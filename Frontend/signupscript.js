/* var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
*/

var input = document.getElementById("myInput");
var text = document.getElementById("capslocktext");
input.addEventListener("keyup", function(event) {
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
        }
    else {
        text.style.display = "none"
        }
    });

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
        if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        }

    var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) {  
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }
    var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) {  
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
    
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        } else {
        length.classList.remove("valid");
        length.classList.add("invalid"); 
        }
};

const togglePassword = document.querySelector('#togglePassword');

const password = document.querySelector('#psw');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

/*function checking() {
    var loc;
    var name1=document.forms["test"]["password"].value;
    var name2=document.forms["test"]["confirmpassword"].value;
    if (name1 === name2) {
        loc = "green-tick.png";
        alert(loc)
    }
    else {
        loc = "red-cross.jpg";
        alert(loc)
    }
    return loc;
};
*/
