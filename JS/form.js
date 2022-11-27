function validateForm() {
  let name = document.forms["myForm"]["fname"].value;
  let email = document.forms["myForm"]["email"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
	  alert("email must be filled out")
	  return false;
  }

  let y = document.getElementById("myForm");
    let z = document.getElementById("myForm").getAttribute("action")
	let newatt = z + "?subject="+name;
    alert(newatt);
    y.setAttribute.action = newatt;
    window.open(newatt);
    
}