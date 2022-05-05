
function showInput() {
  var win =window.open("","","width=60,height=20");
  var fname =  document.getElementById('fname')
  win=document.write("name is"+fname.value);
  var fage =  document.getElementById('age')
  win=document.write("age is"+fage.value);
  var femail=  document.getElementById('email').value;
  win=document.write("email is"+femail.value);           
}