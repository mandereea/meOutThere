import { renderElement, renderTastes } from '../../utilitary.js';
import { TeaShelf } from '../Classes/TeaShelf.js';
import { BlendsShelf } from '../Classes/BlendsShelf.js';


class TeaPage{
    constructor(appDOM){
        this.appDOM = appDOM;
    }
    handleNavigation(){
        //const teaPage = document.querySelector('.teaPage');
        if(window.location.hash = '#tea'){
            const teaPage = document.querySelector('.teaPage');
            teaPage.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (event) => {
                    console.log(event.target.innerHTML)
                    //this.renderRight(event.target.innerHTML);
                    this.renderRight();
                })
            })
        }
        
    }
    renderRight(){
        const teaRight = document.querySelector('.herbsRight');
        console.log(teaRight);
        teaRight.innerHTML = '';

        const tasteDiv = renderTastes(teaRight);
        // switch(linkV){
        //     case 'Temperament':
        //         console.log('temp');
        //         break;
        //     case 'Taste':
        //         console.log(teaRight)
        //         //const tasteDiv = renderTastes(teaRight);
        //         console.log(teaRight)
        //         break;
        //     case 'Meridians':
        //         console.log('mer');
        //         break;
        //     case 'Skill/Antagonists':
        //         console.log('skill');
        //         break;
        //     case 'Local':
        //         console.log('local');
        //         break;

        // }
    }
    renderShelf(){
        const herbsBtns = document.getElementsByClassName('shelvesBtn');
        const teaBottom = document.querySelector('.teaBottom');
            
        herbsBtns[0].addEventListener('click', (e)=>{
            teaBottom.innerHTML = '';
            const teaShelf = new TeaShelf(teaBottom);
            teaShelf.sortHerbs();
            teaShelf.render();
        })
        herbsBtns[1].addEventListener('click',(e)=> {
            teaBottom.innerHTML = '';
            const blendsShelf = new BlendsShelf(teaBottom);
        blendsShelf.render();
        })
    }
    render(){
        const teaPg = renderElement('div', 'teaPage');
        teaPg.innerHTML = `<div class='teaTop'>
                                <div class='herbsLeft'>
                                    <h3> The System::</h3>
                                    <p><a href='#' > Temperament </a> </p>
                                    <p><a href='#' > Taste </a></p>
                                    <p><a href='#'> Meridians </a></p>
                                    <p><a href='#'> Skill/Antagonists </a></p> 
                                    <p><a href='#'> Local </a></p>
                                </div>
                                <div class='herbsRight'>
                                </div>
                            </div>
                            <h3> The Practice: <span> Wander - Pick - Research - Prepare - Explore - Enjoy</span>
                            </h3>
                            <div class='shelves'>
                                <button class='shelvesBtn'>The Herbs Shelf </button>
                                <button class='shelvesBtn'> The Blends Shelf </button>
                            </div>
                                <div class='teaBottom'>
                                    <div class='oneHerb'></div>
                                </div>`;

                            // <h3> The Herbs Shelf:</h3>
                            // <div class='teaBottom'>
                            //     <div class='oneHerb'></div>
                            // </div>`;
        
        // const teaShelf = new TeaShelf(teaPg);
        // teaShelf.sortHerbs();
        // teaShelf.render();

        // const blendsShelf = new BlendsShelf(teaPg);
        // blendsShelf.render();
        
        this.appDOM.appendChild(teaPg);
    }
}

export { TeaPage }