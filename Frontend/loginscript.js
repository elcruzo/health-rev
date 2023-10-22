const togglePassword = document.querySelector('#togglePassword');

const password = document.querySelector('#psw');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

var input = document.getElementById("psw");
var text = document.getElementById("capslocktext");
input.addEventListener("keyup", function(event) {
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
        }
    else {
        text.style.display = "none"
        }
});