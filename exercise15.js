var firstName= prompt("Enter your first name: ");
var lastName= prompt("Enter your last name: ");

fullName(firstName,lastName);
function fullName(first, last ){
    var person={
        first_name: first,
        last_name: last
    };
    console.log("Your full name is: "+person.first_name+" "+ person.last_name);
       
}


