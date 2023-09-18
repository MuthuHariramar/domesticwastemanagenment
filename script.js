let menu=document.querySelector('#menuicon');
let navlist=document.querySelector('.navlist');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
