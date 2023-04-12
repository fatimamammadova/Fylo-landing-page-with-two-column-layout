const form1=document.getElementById("form1");
const form2=document.getElementById("form2");
const email1=document.querySelector('.text1');
const email2=document.querySelector('.text2');
const button1=document.querySelector('#button1');

function error1(input,message) {
    input.className='inputs';
    input.style.borderColor='hsl(353, 84%, 52%)';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='errorcolor1';
}
function error2(input,message) {
    input.className='inputs';
    input.style.borderColor='hsl(353, 84%, 52%)';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='errorcolor2';
}
function succes1(input){
    input.className='';
    input.style.borderColor='hsl(120, 100%, 25%)';
    const div=input.nextElementSibling;
    div.innerText='';
    div.className='successcolor';
}
function succes2(input){
    input.className='';
    input.style.borderColor='hsl(120, 100%, 25%)';
    const div=input.nextElementSibling;
    div.innerText='';
    div.className='successcolor';
}
const validateEmail = (email1) => {
    return String(email1)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validateEmail2 = (email2) => {
    return String(email2)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function clicking1() {
    if(!validateEmail(email1.value)) {
        error1(email1,'Please check your email')
    } 
    else if(validateEmail(email1.value)){
        succes1(email1)
    } else {
        document.querySelector('.text1').style.borderColor='';
    }
}
function clicking2() {
    if(!validateEmail2(email2.value)) {
        error2(email2,'Please check your email')
    } else if(validateEmail2(email2.value)){
        succes2(email2)
    } else {
        document.querySelector('.text2').style.borderColor='';
    }
}
form1.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    if(!validateEmail(email1.value)) {
        error1(email1,'Please check your email');
    } else {
        succes1(email1)
    }
});
form2.addEventListener('submit', function(e) {
    
    e.preventDefault();

    if(!validateEmail2(email2.value)) {
        error2(email2,'Please check your email');
    } else {
        succes2(email2)
    }
});