// Storing the button in a variable
let openButton = document.getElementById("button");
// Storing the form in another variable
let modalForm = document.getElementById("modalForm");

// Adding an event listener to the button when it's clicked:
openButton.addEventListener("click", function(){
    modalForm.style.display = "flex";
});

// Adding an event listener to the submit button
document.getElementById("submitButton").addEventListener("click", function(){
    let userDict = {}; 
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("pwd");
    
    userDict["firstName"] = firstName.value;
    userDict["lastName"] = lastName.value;
    userDict["email"] = email.value;
    userDict["password"] = password.value;
    console.log("Form Data Submitted", userDict);
});
