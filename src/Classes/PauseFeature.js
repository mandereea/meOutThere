import { renderElement, renderBtn, getRandom, renderBreathDetails,renderBreath, deLoading, loading, renderBar } from '../../utilitary.js';
import { yinBreaths, yangBreaths } from '../../Files/Breaths.js'

class PauseFeature{
    constructor(domEl){
        this.domEl = domEl;
        this.need = '';
        this.yinBreath = [];
        this.yangBreath = [];
    }
    
    // renderBar(){
    //     const pauseBarContainer = renderElement('div', 'pauseBarContainer');
    //     pauseContainer.innerHTML = `<div class='pauseDeLoading'></div>`
    //     this.domEl.appendChild(pauseBarContainer);
    // }
    // moveBar(){
    //     const deLoad = document.querySelector('.pauseDeLoading');   
    //     deLoading(deLoad, 1000)
    // }
    render(){
        const pauseContainer = renderElement('div', 'pauseContainer');
        
        const btnsContainer = renderElement('div', 'yBtnsContainer');
        
        const yin = renderBtn('yinBtn','Yin');
        yin.addEventListener('click', (e) => {
            this.need = 'yin';
            this.yinBreath = yinBreaths;
            
            renderBreath(e.target.parentElement.parentElement, this.need, this.yinBreath);
            renderBar(e.target.parentElement.parentElement, this.need);
            e.target.parentElement.remove();
        });

        const yang = renderBtn('yangBtn', 'Yang');
        yang.addEventListener('click', (e) => {
            this.need = 'yang';
            this.yangBreath = yangBreaths;
            renderBreath(e.target.parentElement.parentElement, this.need, this.yangBreath);
            renderBar(e.target.parentElement.parentElement, this.need);
            e.target.parentElement.remove();
        })
        const closeBtn = renderBtn('yClose','X');
        closeBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
        
        btnsContainer.appendChild(yang);
        btnsContainer.appendChild(yin);
        pauseContainer.appendChild(closeBtn);
        
        pauseContainer.appendChild(btnsContainer);
        
        this.domEl.appendChild(pauseContainer);
    }
}

export { PauseFeature };