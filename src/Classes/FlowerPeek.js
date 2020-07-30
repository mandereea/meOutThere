import { renderElement, renderBtn, getTemperament } from "../../utilitary.js";


class FlowerPeek{
    constructor(DomEl, flower){
        this.DomEl = DomEl;
        this.flower = flower;
        this.historyPg = 0;
        this.factPg = 0;
    }
    handleNext=(e, section, page)=>{
        if(this[page] !== this.flower[section].length-1){
            this[page] += 1;
        }else{
            this[page] = 0;
        }
        e.target.parentElement.parentElement.remove();
        e.target.parentElement.innerHTML = `<p>${this.flower[section][this[page]]}</p>`;
       
        this.render();
    }
    renderFacts(section, page){
        
        const pageDiv = renderElement('div',`${section}Div`);
        const nextBtn = renderElement('btn', `${section}Btn`,'./images/flowerBtns/nextBtn.png');
        pageDiv.innerHTML = `<p>${this.flower[section][this[page]]}</p>`;
       
        nextBtn.addEventListener('click', (e) => {
            
            this.handleNext(e, section, page);
        })
        
        pageDiv.appendChild(nextBtn);
        return pageDiv;
    }
    render(){
        //this.DomEl.lastChild.innerHTML='';
        const flowerPeek = renderElement('div', 'flowerPeek');
        
        const history = this.renderFacts('history', 'historyPg');
        const facts = this.renderFacts('dayFact', 'factPg');

        const tempClass = getTemperament(this.flower.temperament[0]);
        const closeBtn = renderBtn('closeFrame', 'X');
        closeBtn.addEventListener('click',(e) => {
            e.target.parentElement.remove();
        })
        
        flowerPeek.innerHTML = `<img src=${this.flower.imgSrc} alt='flower picture' />
                                <div class='flowerNames'>
                                    <h4><span>I'm </span>${this.flower.name[0]}</h4>
                                    <p>${this.flower.name[1]}, ${this.flower.name[2]}</p>
                                </div>
                                <p class=${tempClass}>${this.flower.temperament[0]}</p>`
        flowerPeek.append(closeBtn);

        flowerPeek.appendChild(history);
        flowerPeek.appendChild(facts);

        this.DomEl.appendChild(flowerPeek);

    }
}

export { FlowerPeek };