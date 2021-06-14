
window.onload=pageLoad;
function pageLoad(){
	var form1 = document.getElementById("form1");
	form1.onsubmit= validate;
}
function validate(){
	var check = true;
	var name = document.getElementById("fname").value;
	var mail = document.getElementById("eml").value;
	var phone = document.getElementById("num").value;
	var password = document.getElementById("pass").value;

	
	if(name == ""){
		alert('Name is required !');
		check= false;
	}
	
	if(mail == ""){
		alert('E-mail is required !');
		check= false;
	}

	if(password == ""){
		alert('Password is required !');
		check= false;
	}
	
	if (phone == "") {

		alert('Phone is required !');
	}
	

	if (!name.match(/^[A-Za-z ]+$/)){ //space------------------------------
		alert("only letters or space allowed in name field");
		check= false;
	}
	if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}

	if (!password.match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8}$/)){
        alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
        check=false;
    }
	
    if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}
	if(check==true)
    {alert('welcome in our page : '+ " " +f_name + "  " +l_name )}

    return check;


}







