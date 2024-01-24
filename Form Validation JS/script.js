

//getting elements by id 
const form = document.getElementById("form") ; 
const username = document.getElementById("username") ; 
const email = document.getElementById("email") ; 
const password = document.getElementById("password") ; 
const password2 = document.getElementById("password2") ;  


//adding evenrlistener when user submits the form 
form.addEventListener('submit' , e => {
  e.preventDefault() ;  // to prevent the reload of page 
  checkInput()  ; //validation function call 
} ) ; 
 
//validation function definition 
function checkInput(){  

    //using trim function to cut the unnecessary space entered by user 
    const usernameValue = username.value.trim() ; 
    const emailValue = email.value.trim() ;
    const passwordValue = password.value.trim() ;
    const password2Value = password2.value.trim() ;

    
    //username validation 
    
    if(usernameValue === ''  ){
        setError(username, 'Username cannot be empty'); 
    } 
    else{
        setSuccess(username) ; 
    }  
  

    //email validation 
   
    if(emailValue === ''){
        setError(email , 'email cannot be blank') ;  
    }  
    else if(!isEmail(emailValue)) {
        setError(email,'Not a valid email') ; 
    }
    else{
        setSuccess(email) ; 
    }
    
    //password validation 
    if(passwordValue === ''){
        setError(password , 'password cannot be empty') ; 
    } 
    else{
        setSuccess(password) ; 
    } 
   


     //password match validation 
    if(password2Value === '') {
        setError(password2 , 'password cannot be empty') ; 

    } 
    else if(password2Value !== passwordValue) {
        setError(password2 , 'Passwords does not match')
    } 
   else{
    setSuccess(password2) ; 
   }

}  
 

//setting error message to the user 
function setError(input , message)
{ 
    const formControl = input.parentElement;
    const small = formControl.querySelector('small') ; 
    formControl.className = 'form-control error' 
    small.innerText = message; 

} 

//success indication to the user 
function setSuccess(input){ 

    const formControl = input.parentElement ; 
    formControl.className = 'form-control success' ; 

} 

//email validation using regex 
 function isEmail(email){ 

    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(email) ; 

 } 

