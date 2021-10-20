
let angleDown = document.getElementById("scroll-arrow")

const windowInnerHeight = document.documentElement.clientHeight 

angleDown.addEventListener("click",()=>window.scrollTo({
    behavior:'smooth',
    top:windowInnerHeight -10
}));