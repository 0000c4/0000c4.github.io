const modal = document.getElementById("modal");

//бургер
let burger = document.querySelector('.header__burger');
let container_burger = document.querySelector('.burger_container');
let mobile_menu = document.querySelector('.menu__body');
burger.onclick = function(){
    mobile_menu.classList.toggle('active');
    burger.classList.toggle('active');
    container_burger.classList.toggle('active');
}

//выбор языка
let laungauge_icon = document.querySelectorAll('.launguage_icon');
let laungauge_links = document.querySelectorAll('.launguage_link');
laungauge_links.forEach((element, index)=>{
    element.addEventListener("click", ()=>{
        laungauge_icon.forEach(element =>{
            if(element.classList[0] == 'active'){
                element.remove('active');
            }
        })
        laungauge_icon[index].classList.add('active');
    });
})
