"use strict";



const loginform = $('#login-form');
const usernameForm = $('#username_login');
const passwordForm = $('#password_login');



loginform.addEventListener('submit', (e) =>{
    e.preventDefault();
    const username = usernameForm.value;
    const password = passwordForm.value;
    if(localStorage.getItem('token')){
        const tokenitem = JSON.parse(localStorage.getItem('token'));
        if(tokenitem.username === username && tokenitem.password === password){
            window.location.href = '../../index.html';
        }else{
            alert("this is not a valid login");
        }
    }else{
        alert("this is not a valid login");
    }
});