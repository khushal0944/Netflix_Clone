function validateGmail(email) {
    const gmailRegex = /^[^\s@]+@gmail\.com$/;
    return gmailRegex.test(email);
}


const inputOne = document.getElementById("email1");
inputOne.addEventListener("input",function(){
    const enteredEmail = inputOne.value;
    const isValid = validateGmail(enteredEmail);
    const checked = document.getElementById("checkemail");
    if (isValid) {
        checked.style.visibility = "hidden"
        inputOne.style.border = "1px solid #717171cc"
        inputOne.style.outline = "none"
    } else {
        checked.style.visibility = "visible"
        inputOne.style.border = "none"
        inputOne.style.outline = "1px solid red"
    }
    if(enteredEmail.trim() === ""){
        checked.style.visibility = "hidden"
        inputOne.style.border = "1px solid #717171cc"
        inputOne.style.outline = "none"
    }
})

const inputTwo = document.getElementById("email2");
inputTwo.addEventListener("input",function(){
    const enteredEmail = inputTwo.value;
    const isValid = validateGmail(enteredEmail);
    const checked = document.getElementById("checkemail2");
    if (isValid) {
        checked.style.visibility = "hidden"
        inputOne.style.border = "1px solid #717171cc"
        inputOne.style.outline = "none"
    } else {
        checked.style.visibility = "visible"
        inputOne.style.border = "none"
        inputOne.style.outline = "1px solid red"
    }
    if(enteredEmail.trim() === ""){
        checked.style.visibility = "hidden"
        inputOne.style.border = "1px solid #717171cc"
        inputOne.style.outline = "none"
    }
})
