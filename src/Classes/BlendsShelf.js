import { blends } from '../../Files/blends.js';
import { renderElement } from '../../utilitary.js';

class BlendsShelf{
    constructor(domEl){
        this.domEl = domEl;
        this.blends = blends;
    }
    render(){
        const blendsShelf = renderElement('div', 'blendsShelf');

        this.blends.forEach(blend => {
            const blendDiv = renderElement('div','blendDiv');
            blendDiv.innerHTML = `<img src=${blend.imgSrc} />
                                  <div class='shelfBlend'>
                                    <h4 class='blendName'>${blend.name}</h4>
                                    <p class='blendBlend'>${blend.blend[1]}</p>
                                    <p class='blendRatio'>${blend.ratio}</p>
                                  </div>`
            blendsShelf.appendChild(blendDiv)
        })

        this.domEl.appendChild(blendsShelf);
    }
}

export { BlendsShelf };