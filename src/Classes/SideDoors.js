import { renderElement, renderBtn } from '../../utilitary.js';

class SideDoors{
    constructor(domEl){
        this.domEl = domEl; 
        this.render();
    }
    hoverEvent(){
        const sideDoors = document.querySelectorAll('.sideDoors > a');
        console.log(sideDoors)

    }
    render(){
        const sideDoors = renderElement('div', 'sideDoors');
        sideDoors.innerHTML = `<a href='index.html#codeDeck'> Code </a>
                               <a href='index.html#tea'> Tea </a>
                               <a href='index.html#yoQi'> YoQi </a>`
        this.domEl.appendChild(sideDoors);
        this.hoverEvent();
    }
}

export { SideDoors };