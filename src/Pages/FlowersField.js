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
            // const randomBtnSrc = flowerBtns[Math.floor(Math.random() * flowerBtns.length)];
            // const flowerBtn = renderElement('button','flowerBtn', `${randomBtnSrc}`);
            const flowerBtn = new FlowerBtn(map, this.side, this.hash);
            flowerBtn.render();
            // flowerBtn.style.position = 'absolute';
            // flowerBtn.style.top = `${Math.floor(Math.random()*450)+150}px`
            // flowerBtn.style.left = `${Math.floor(Math.random()*300)}px` 
            
            // flowerBtn.addEventListener('click', (e) => {
            //     const randomFlower = this.flowers[Math.floor(Math.random() * this.flowers.length)]
            //     const flower = new Flower( flowerBtn, randomFlower);
            //     flower.render(e.target);
            // })
            
            // this.containerDOM.appendChild(flowerBtn);
            this.containerDOM.appendChild(map);
        }
    }
}

export { FlowersField }