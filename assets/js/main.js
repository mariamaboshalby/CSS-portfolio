let navbar= document.getElementById('navbar');
let brand= document.querySelector('.brand');
let name= document.querySelector('.name');
let link1= document.querySelector('#link1');
let link2= document.querySelector('#link2');
let link3= document.querySelector('#link3');
let link4= document.querySelector('#link4');
let menu =document.querySelector('.menu');
let hideNav =document.querySelector('.hidden-nav');
let copyNav =document.querySelector('.copy-nav');
let close =document.querySelector('.close');


window.addEventListener('scroll',()=>{
    if (scrollY>0){
        navbar.style.backgroundColor='#fff';
        brand.style.color='#414743';
        name.style.color= '#414743';
        link1.style.color='#414743';
        link2.style.color='#414743';
        link3.style.color='#414743';
        link4.style.color='#414743';
        menu.style.color='#414743';
        navbar.style.boxShadow='0 1rem 10rem #252926';
    }
    else{
        navbar.style.backgroundColor='transparent';
        brand.style.color='#fff';
        name.style.color= '#fff';
        link1.style.color='#fff';
        link2.style.color='#fff';
        link3.style.color='#fff';
        link4.style.color='#fff';
        menu.style.color='#fff';
        navbar.style.boxShadow='none';
    }
})

function show(){
    copyNav.style.visibility='visible';
    hideNav.style.visibility='visible';
}
function hide(){
    copyNav.style.visibility='hidden';
    hideNav.style.visibility='hidden';
}


