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
])