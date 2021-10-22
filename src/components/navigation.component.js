import { Component } from '../core/component.js';


export class navigationComponent extends Component {
    constructor(id) {
        super(id);
        this.tabs = [];
    }
    init() {
        window.addEventListener('hashchange', this.locationHashChanged.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;

    }

    locationHashChanged() {
        const h = window.location.hash;
        const tbs = document.querySelectorAll('.nav-point');
        const activeTab = Array.from(tbs).find(tbs => tbs.hash === h);
        const content = document.getElementById(activeTab.getAttribute('data-name'));
        this.tabs.forEach(tab => (tab.component).classList.add('hide'));
        window.scrollTo(scrollX,0)
        content.classList.remove('hide');
    }
}
