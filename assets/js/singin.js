"use strict";

const loginform = $('#login-form');
const usernameForm = $('#username_singin');
const passwordForm = $('#password_singin');
const repasswordForm = $('#repassword_singin');


loginform.addEventListener('submit', (e) =>{
    e.preventDefault();
    const username = usernameForm.value;
    const password = passwordForm.value;
    const repassword = repasswordForm.value;
    if(password === repassword){
        const data = {
            username: username,
            password: password
        }

        localStorage.setItem('token', JSON.stringify(data));
        window.location.href = 'login.html';
    }else{
        alert('password not match');
    }
});