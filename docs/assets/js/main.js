const viewer = document.getElementById("Image_viewer");
const modal = document.getElementById("modal");
const Image_viewer_left = document.getElementById("Image_viewer_left");
const Image_viewer_right = document.getElementById("Image_viewer_right");
//просмотр фотографий
viewer.addEventListener("click", (event) => {
    event.stopPropagation()
    modal.classList.add("active");
    viewer.classList.add("active");

});

modal.addEventListener("click", () => {
    modal.classList.remove("active");
    viewer.classList.remove("active");
})
//перелистывание фотографий
const imageList = [
    "./assets/images/home.jpg",
    "./assets/images/home_1.jpg"
];
let indexList = 0;

Image_viewer_left.addEventListener("click", (event) => {
    event.stopPropagation()
    if (indexList > 0) {
        indexList--;
        viewer.style.backgroundImage = `url(${imageList[indexList]})`
    }
});

Image_viewer_right.addEventListener("click", (event) => {
    event.stopPropagation()
    if (indexList < imageList.length - 1) {
        indexList++;
        viewer.style.backgroundImage = `url(${imageList[indexList]})`
    }
});

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
