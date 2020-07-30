import { renderElement, renderQiEl } from '../../utilitary.js';
import { qiElements } from '../../Files/yoQi.js'

class ElementsComp{
    constructor(domEl){
        this.domEl = domEl;
        this.elements = qiElements;
    }
    
    render(){
        const elementsWrapper = renderElement('div', 'elementsWrapper');
        console.log(elementsWrapper);
        this.elements.forEach(element => {
            const renderedEl = renderQiEl(elementsWrapper, element);
        })
        this.domEl.appendChild(elementsWrapper)
    }
}

export { ElementsComp };