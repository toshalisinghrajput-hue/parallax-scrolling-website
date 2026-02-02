let lmount = document.getElementById('lmount');
let home = document.getElementById('home');
let tree = document.getElementById('tree');
let rmount = document.getElementById('rmount');
let rmount2= document.getElementById('rmount2');
let mount= document.getElementById('mount');
let text = document.getElementById('text');
let text1 = document.getElementById('text1');

const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onclick=function () {
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');

    // body...
}

// let mount1 = document.getElementById('mount1');
// let mount1 = document.getElementById('mount1');
// let mount3 = document.getElementById('mount3')
// let upbg = document.getElementById('upbg')
// let mount4 = document.getElementById('mount4')
// let downbg = document.getElementById('downbg')

window.addEventListener('scroll', () => {
	let value = window.scrollY;
    lmount.style.left = value * -0.5 + 'px';
    home.style.left = value *  0.5 + 'px';
    tree.style.left= value * 0.5+ 'px';
    rmount2.style.left= value * 0.5 + 'px';
    rmount.style.left = value * 0.3 +'px';
    mount.style.top = value * 0.2+ 'px';
    text.style.top = value *0.5 +'px';
    text1.style.left =value*1.5 +'px';
    // mount3.style.left= value * 0.5 + 'px'
    // upbg.style.left= value * 1 + 'px'
    // mount4.style.top= value * 1 + 'px'
    // downbg.style.left= value * 1 + 'px'
    
});


const container = document.querySelector('.container');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.close-icon');


registerlink.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    container.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    container.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    container.classList.remove('active-popup');
});