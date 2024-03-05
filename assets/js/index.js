"use strict";


const clickAsideMenu = $("#dropdown-click");
const aside = $('#asidemenu')
const userprofil = $('#userprofil')
const toglemenu = $('#togle-menu')
const togleclick = $('#togle-click')





clickAsideMenu.addEventListener("click", () => {
    aside.classList.toggle("aside-show");
});

togleclick.addEventListener("click", () => {
    toglemenu.classList.toggle("togleclas");
});


window.addEventListener("click", (e) => {
   if(!e.target.classList.contains("togle-menu") && !e.target.classList.contains("togle-click")){
        toglemenu.classList.remove("togleclas");
   };
});


function jsonAuten(){
    if(localStorage.getItem("token")){
        const data = JSON.parse(localStorage.getItem("token"));
        userprofil.innerHTML = data.username;
    }else{
        window.location.href = "./assets/pages/login.html";
    }
}

jsonAuten()