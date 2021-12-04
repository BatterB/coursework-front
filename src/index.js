import { navigationComponent } from "./components/navigation.component.js"

let angleDown = document.getElementById("scroll-arrow")

const windowInnerHeight = document.documentElement.clientHeight 

angleDown.addEventListener("click",()=>window.scrollTo({
    behavior:'smooth',
    top:windowInnerHeight -10
}));

const navigation = new navigationComponent('navigation')

navigation.registerTabs([
    {name:'main', component: main },
    {name:'hstr', component: hstr },
    {name:'Arc', component: Arc },
    {name:'x86', component: x86 },
    {name:'AMD', component: AMD },
    {name:'AMD-now', component: AMDnow },
    {name:'Intel', component: Intel },
    {name:'IntelNow', component: IntelNow }
])

let menuButton = document.getElementById('menuButton')
let nav = document.getElementById('nav-menu')
let state = 0;

let line = document.getElementsByClassName('line')

menuButton.addEventListener("click",()=>{
    
    if(state === 0){
        nav.classList.add('show-menu');
        state= 1;
        Array.from(line).forEach(element => {
            element.style.display = 'none';
        });
        menuButton.classList.add('crossButton');

    }
    else{
        nav.classList.remove('show-menu');
        state =0;
        Array.from(line).forEach(element => {
            element.style.display = 'block';
        });
        menuButton.classList.remove('crossButton');
    }
}
)

let imageNum = 1;

function slaider(){
    let nowImage = document.getElementById('slaider-item'+imageNum);
    imageNum+=1;
    if(imageNum>4){
        imageNum=1;
    }
    let newImage = document.getElementById('slaider-item'+imageNum);
    nowImage.classList.add("hide");
    newImage.classList.remove("hide");
    newImage.classList.add("show-slaid");
    nowImage.classList.remove("show-slaid");
}


setInterval(slaider,3000)