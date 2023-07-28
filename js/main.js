var elForm = document.querySelector('.form')


elForm.addEventListener('submit', function(even){
    even.preventDefault()
    console.log(even.target.login.value);
    console.log(even.target.password.value);
   if (even.target.login.value>5)
   console.log('error login');
   else{
    console.log('correct logo');
   }
   if (even.target.password.value>7)
   console.log('error password');
   else{
    console.log('correct password');
   }
})
