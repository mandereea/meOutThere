import { flowers } from '../../Files/flowers.js';
import { renderElement, getTemperament, getTaste } from '../../utilitary.js';
import { HerbDetails } from '../Classes/HerbDetails.js';

class TeaShelf{
    constructor(domEl){
        this.domEl = domEl;
        this.flowers = flowers;
    }
    sortHerbs(){
        this.flowers.sort(function(a, b) {
            return parseFloat(a.temperament[1][0]) - parseFloat(b.temperament[1][0]);
        })
    }
    render(){
        const teaShelf = renderElement('div', 'teaShelf');
        
        this.flowers.forEach(herb => {
            const herbDiv = renderElement('div','herbDiv');
            const tempClass = getTemperament(herb.temperament[0]);
            const taste = getTaste(herb.description.taste[1]);

            herbDiv.innerHTML = `<img src=${herb.imgSrc} />
                                 <div class='shelfHerb'>
                                    <h4 class='herbTitle'>${herb.name[0]}</h4>
                                    <p class='herbTemp ${tempClass}'>${herb.temperament[0]}</p>
                                </div>`
            herbDiv.appendChild(taste);
            herbDiv.addEventListener('click',(e) => {
                const herbDetDiv = document.querySelector('.herbsRight');
                herbDetDiv.innerHTML = '';
                const herbDetails = new HerbDetails(herbDetDiv, herb)
                herbDetails.render();
                scroll(0,0);
            })
        teaShelf.appendChild(herbDiv);
        })
        this.domEl.appendChild(teaShelf)
    }
}


 export { TeaShelf };

