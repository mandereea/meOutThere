import { renderElement, getTemperament, getTaste } from '../../utilitary.js';

class HerbDetails{
    constructor(domEl, herb){
        this.domEl = domEl;
        this.herb = herb;
    }
    render(){
        const herbDiv = renderElement('div', 'herbDetDiv');

        const tempClass = getTemperament(this.herb.temperament[0]);
        //const taste = getTaste(this.herb.description.taste[1]);
        
        herbDiv.innerHTML = `<img src='${this.herb.imgSrc}' />
                            <div class='herbDivText'>
                                <h5>${this.herb.name[0]}</h5>
                                 <p><i>${this.herb.name[1]}</i></p>
                                 <p class='${tempClass}'><b>Temperament: </b>${this.herb.temperament[0]}</p>
                                 <p><b>Taste: </b>${this.herb.description.taste[0]}</p>
                                 <p><b>Skill: </b> ${this.herb.description.skill}</p>
                                 <p><b>Antagonists: </b>${this.herb.description.enemies[0]}</p>
                                 <p><b> Ex: </b> ${this.herb.description.enemies[1]}</p>
                            </div>`
        this.domEl.appendChild(herbDiv);
    }
}

export { HerbDetails };
