 
const form = document.getElementById('form');
const formSub = document.getElementById('formSubmit');
const name = document.getElementById('name_form');
const email = document.getElementById('email_form');
const message = document.getElementById('message_form');
formSub.addEventListener('click', function (e){
     e.preventDefault();
     checkInputs();
 });

//Im thinking there should be a better way to write this. 
document.querySelector('#name_form').addEventListener('keydown', clearError);
document.querySelector('#email_form').addEventListener('keydown', clearError);


function charCount(x){
    const textLength = x.value.length;
    document.querySelector('#numberOfChar').innerText=textLength;
    if(textLength > 140){
        setErrorMessage(message, 'Your message is to long.')
    }else{
        message.parentElement.classList.remove('error');
    }
};


function checkInputs() {
    event.preventDefault();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim(); 

if(nameValue === ""){
    setErrorMessage(name, 'name can not be blank')
    name.value="";
};
if(emailValue === ""){
    setErrorMessage(email, 'email can not be blank')
    email.value="";
}else if (!isEmail(emailValue)) {
    setErrorMessage(email, 'email must be valid')
};
if(messageValue === ""){
    setErrorMessage(message, 'message can not be blank')
    name.value="";
};
};

function setErrorMessage(input, message) {
    const formOption = input.parentElement;
    const small = formOption.querySelector('small');
    formOption.className = 'formOption error';
    small.innerText = message;
}

function clearError() {
    //console.log('this is this');
    //console.log(this.parentElement);
    const partentHasErrorClass = this.parentElement.getAttribute('class');
    if(partentHasErrorClass == 'formOption error'){
     const errorField = document.querySelector('.formOption.error');
     errorField.classList.remove('error');
     console.log('this is the keydown functionm');
    }
     
 };

 function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
