

function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var gender = document.getElementById("gender").value;

   
    for (var i = 0; i < fname.length; i++) {
        var ch = fname.charAt(i);
        if (!(ch >= 'A' && ch <= 'Z') && !(ch >= 'a' && ch <= 'z') && ch !== ' ') {
            alert("First name can contain only alphabets and spaces");
            return false;
        }
    }

  
    for (var i = 0; i < lname.length; i++) {
        var ch = lname.charAt(i);
        if (!(ch >= 'A' && ch <= 'Z') && !(ch >= 'a' && ch <= 'z') && ch !== ' ') {
            alert("Last name can contain only alphabets and spaces");
            return false;
        }
    }

    
    if (!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false;
    }

    
    if (contact.length !== 10) {
        alert("Contact number must be 10 digits");
        return false;
    }

    for (var i = 0; i < contact.length; i++) {
        if (contact.charAt(i) < '0' || contact.charAt(i) > '9') {
            alert("Contact number must contain only digits");
            return false;
        }
    }

    
    if (gender === "") {
        alert("Please select gender");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    var d = document.getElementById('dob');
    if (d) d.max = new Date().toISOString().split('T')[0];
});
