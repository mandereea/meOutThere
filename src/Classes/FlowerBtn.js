import { FlowerPeek } from './FlowerPeek.js';
import { flowers, flowerBtns } from '../../Files/flowers.js';
import {renderElement } from '../../utilitary.js';

class FlowerBtn{
    constructor(containerMap, side, hash){
        this.containerMap = containerMap;
        this.flowers = flowers;
        this.side = side;
        this.hash = hash;
    }
    render(){
        const randomImgSrc = flowerBtns[Math.floor(Math.random() * flowerBtns.length)];
        const flowerBtn = renderElement('button','flowerBtn', `${randomImgSrc}`);
        
        flowerBtn.style.position = 'absolute';
        flowerBtn.style.top = `${Math.floor(Math.random()*400)+200}px`
        if(this.side == 'left'){
            switch(this.hash){
                default:
                    flowerBtn.style.left = `${Math.floor(Math.random()*400)}px`;
                    break;
                case '#codeDeck':
                    flowerBtn.style.top = `${Math.floor(Math.random()*950)+270}px`
                    flowerBtn.style.left = `${Math.floor(Math.random()*90)}px`
                    break;
                case '#tea':
                    flowerBtn.style.top = `${Math.floor(Math.random()*550)+200}px`;
                    flowerBtn.style.left = `${Math.floor(Math.random()*150)}px`;
                    break;
                case '#doors':
                    flowerBtn.style.top = `${Math.floor(Math.random()*150)+150}px`;
                    flowerBtn.style.left = `${Math.floor(Math.random()*650)}px`;
                    break;
                case '#yoQi':
                    flowerBtn.style.top = `${Math.floor(Math.random()*150)+150}px`;
                    flowerBtn.style.left = `${Math.floor(Math.random()*650)}px`;
                    break;
            }
             
        }else if(this.side == 'right'){
            switch(this.hash){
                default:
                    flowerBtn.style.right = `${Math.floor(Math.random()*400)}px`;
                    break;
                case '#codeDeck':
                    flowerBtn.style.top = `${Math.floor(Math.random()*950)+300}px`
                    flowerBtn.style.right = `${Math.floor(Math.random()*90)}px`
                    break;
                case '#tea':
                    flowerBtn.style.top = `${Math.floor(Math.random()*550)+200}px`
                    flowerBtn.style.right = `${Math.floor(Math.random()*150)}px`  
                    break;
                case '#doors':
                    flowerBtn.style.top = `${Math.floor(Math.random()*150)+150}px`;
                    flowerBtn.style.right = `${Math.floor(Math.random()*650)}px`;
                    break;
                case '#yoQi':
                    flowerBtn.style.top = `${Math.floor(Math.random()*150)+450}px`;
                    flowerBtn.style.right = `${Math.floor(Math.random()*750)}px`;
                    break;
                }
        }
        
        
        flowerBtn.addEventListener('click', (e) => {
            const randomFlower = this.flowers[Math.floor(Math.random() * this.flowers.length)]
            //clearing previous peek
            const otherPeek = document.querySelector('.flowerPeek');
            if(otherPeek){
                otherPeek.remove();
            }
            //rendering peek
            const flower = new FlowerPeek (e.target.parentElement, randomFlower);
            flower.render();
            scroll(0, 0);
            e.target.remove();
        })
        this.containerMap.appendChild(flowerBtn);
    }
}

export { FlowerBtn };