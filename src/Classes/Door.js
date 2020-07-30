import { renderElement } from '../../utilitary.js';

class Door{
    constructor(domEl, section){
        this.domEl = domEl;
        this.section = section;
        
        this.render();
    
    }
    render(){
        const door = renderElement('div','door', this.section.imgUrl);
        door.innerHTML = `<div class='doorScreen ${this.section.tag}'>
                            <h3>${this.section.title}</h3>
                            <p>${this.section.story[0]}</p>
                            <p>${this.section.story[1]}</p>
                            <p>${this.section.story[2]}</p>
                            <a href='index.html${this.section.dataTarget}'> enter </a>
                          </div>`
        this.domEl.appendChild(door);
    }
}

export { Door }
    
