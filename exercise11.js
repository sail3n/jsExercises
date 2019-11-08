function emailValidate(email){
    var regex= /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
    if (regex.test(email) =="" || !regex.test(email)){
        alert("Please enter the valid email address");
    }else{
        alert("The given email is a valid email");
    }

}
var userEmail= prompt("Enter email address ");
emailValidate(userEmail);