import { info } from '../../Files/Info.js';
import { renderInfo } from '../../utilitary.js';

class HiPage {
    constructor(appDom){
        this.appDom = appDom;
    
    }
    render(){
        const hiDOM = document.createElement('main');
        hiDOM.classList.add('hiApp');

        hiDOM.innerHTML = `
                <p> Welcome in my www home </p> 
                <p> I AM </br>
                    <b>andreea mandiuc,</b><br/>
                    the host. </p> 
                <p> House tips: 'Hi,' takes you Home. As a guest or a friend, you'll be called by your name.</br>
                                Every flower does something.</br>
                    House random activities: we can
                        <span class='spanCode tooltip'> codeTalk* 
                            <span class="tooltiptext">
                                ${info.iCode[0]}
                                <input class='codeTalk'type='text' maxlenght='9' focus/>
                                ${info.iCode[1]}</br>
                                <span style='color:#ec994c'>${info.iCode[2]}
                                </span></i></span></span>, stop to 
                        <span class='spanFlower tooltip'> smell aFlower* 
                            <span class="tooltiptext">${info.iFlower}</span></span>,</br>or just 
                        <span class='spanBreath tooltip'> pause and stretch a fullBreath*  
                            <span class="tooltiptext">${info.iPause}</span></span></a>.</p>
                <p> <b> happy to greet you </b></p>
                <img src ='./images/smile.png'/>
                
                <p>Feel free to click click-able things and discover the place, or go on and</p>
                <p><a class='pick' href='index.html#doors'> Check the Rooms </a> </p>`

        this.appDom.appendChild(hiDOM);
    }
}

export { HiPage }