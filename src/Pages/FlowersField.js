// import { Flower } from '../Classes/Flower.js';
import { FlowerBtn } from '../Classes/FlowerBtn.js';
import { flowers, flowerBtns } from '../../Files/flowers.js';
import {renderElement } from '../../utilitary.js';

class FlowersField{
    constructor(containerDOM, side,hash){
        this.containerDOM = containerDOM;
        this.side =side;
        this.hash = hash;
        this.flowers = flowers;
        
    }
    render(){
        const map = renderElement('div', 'flowersContainer');
        map.classList.add(this.side);
        const randomNumBtns = Math.floor(Math.random() * 4)+4;
       
        for(let i=0; i < randomNumBtns; i++){
            const flowerBtn = new FlowerBtn(map, this.side, this.hash);
            
            flowerBtn.render();
            this.containerDOM.appendChild(map);
        }
    }
}

export { FlowersField }