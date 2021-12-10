var errorNumber = 0;


function validateFirstName() 
{
    var firstName = document.getElementById("firstName").value;
    var format =  /^[A-Z]+[a-zA-Z]+$/;
    var res = false;
    if (firstName.match(format) && firstName.charAt(0) == firstName.charAt(0).toUpperCase()) 
    {
      res = true;
    }
    else
    {
      document.getElementById("error1").innerHTML += "<p>Please enter a valid First Name.</p>";
      errorNumber++;
    }
      
    return res;
}

function validateLastName() 
{
    var lastName = document.getElementById("lastName").value;
    var format =  /^[A-Z]+[a-zA-Z]+$/;
    var res = false;
    if (lastName.match(format) && lastName.charAt(0) == lastName.charAt(0).toUpperCase()) 
    {
      res = true;
    }
    else
    {
      document.getElementById("error2").innerHTML += "<p>Please enter a valid Last Name.</p>";
      errorNumber++;
    }
    return res;
}

  function validateUserName() 
{
    var userName = document.getElementById("userName").value;
    var format = /^[a-zA-Z][a-zA-Z0-9]{6,}$/;
    var res = false;
    if (userName.length >= 6 && userName.charAt(0).match(format)) 
    {
      res = true;
    }
    else
    {
      document.getElementById("error3").innerHTML += "<p>Please enter valid User Name.</p>";
      errorNumber++;
    }
    return res;
}
  

  function validatepassword() 
{
    var password = document.getElementById("password").value;
    let format = /[a-zA-Z]+[0-9]+/i;
    var res = false;
    if (password.length >= 6 && password.match(format)) {
      res = true;
    }
    else
    {
      document.getElementById("error4").innerHTML += "<p>Please enter valid Password.</p>";
      errorNumber++;
    }
    return res;
}

function validateConfirm() 
{
    var password1 = document.getElementById("password").value;
    var confirmation = document.getElementById("passwordConfirmation").value;
    var res = false;
    if (password1 == confirmation) {
      res = true;
    }
    else
    {
      document.getElementById("error5").innerHTML += "<p>The two passwords you entered do not match.</p>";
      errorNumber++;
    }
    return res;
}


function validateAge() 
{
    var age = document.getElementById('age').value;
    var res = false;
    if (age >= 18 && age <= 60) 
    {
      res = true;
    }
    else if(errorNumber < 5)
    {
      document.getElementById("error6").innerHTML += "<p>Age must be between 18 and 60.</p>";
    }
    return res;
}

function formValidation() 
{

  var firstName = validateFirstName();
  var lastName = validateLastName();
  var userName = validateUserName();
  var password = validatepassword();
  var confirmation = validateConfirm();
  var age = validateAge();
  
  if(firstName && lastName && userName && password && confirmation && age)
  {
    alert("Your information has been submitted successfully!");
    return true;
  }
  else {
    return false
  }
}

var resetButton = document.signup.resetButton
function clearMessage() 
{
  document.getElementById("error1").innerHTML = " ";
  document.getElementById("error2").innerHTML = " ";
  document.getElementById("error3").innerHTML = " ";
  document.getElementById("error4").innerHTML = " ";
  document.getElementById("error5").innerHTML = " ";
  document.getElementById("error6").innerHTML = " ";
}
