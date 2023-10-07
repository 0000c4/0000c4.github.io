const burger = document.getElementById("burger");
const mobile_menu = document.getElementById("mobile_menu");
burger.addEventListener("click",()=>{
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden')
})

const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');
tabTriggers.forEach((trigger,index)=>{
    trigger.addEventListener("click",()=>{
        tabTriggers.forEach((t)=>{
            t.classList.remove('active');
        })
        trigger.classList.add('active');
        tabContents.forEach(content =>{
            content.classList.add('hidden')
        })
        tabContents[index].classList.remove('hidden')
    })
})