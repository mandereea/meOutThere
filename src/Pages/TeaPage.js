import { renderElement, renderTastes } from '../../utilitary.js';
import { TeaShelf } from '../Classes/TeaShelf.js';


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
                            <h3> The Herbs Shelf:</h3>
                            <div class='teaBottom'>
                                <div class='oneHerb'></div>
                            </div>`;
       
        const teaShelf = new TeaShelf(teaPg);
        teaShelf.sortHerbs();
        teaShelf.render();
        
        this.appDOM.appendChild(teaPg);
    }
}

export { TeaPage }