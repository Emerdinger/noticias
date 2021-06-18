const show =document.querySelector('.show-hide-menu');
const menu = document.querySelector('.nav-menu');

show.addEventListener('click', (e)=>{

    if (menu.classList.contains('show')){
        menu.classList.remove('show');
    }else{
        menu.classList.add('show');
    }
});