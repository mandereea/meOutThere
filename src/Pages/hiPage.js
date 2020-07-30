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
                    your host. </p> 
                <p> While here, we can 
                        <span class='spanCode tooltip'> talk CODE
                            <span class="tooltiptext">
                                ${info.iCode[0]}
                                <input class='codeTalk'type='text' maxlenght='9' focus/>
                                ${info.iCode[1]}</br>
                                <span style='color:#ec994c'>${info.iCode[2]}
                                </span></i></span></span>, stop to 
                        <span class='spanFlower tooltip'> smell a flower 
                            <span class="tooltiptext">${info.iFlower}</span></span>,</br>or just 
                        <span class='spanBreath tooltip'> pause and stretch a full breath  
                            <span class="tooltiptext">${info.iPause}</span></span></a>.</p>
                <p> I AM</br>
                    <b> happy to greet you </b></p>
                <img src ='./images/smile.png'/>
                <p> while <b> HERE NOW </b>, let's </p>
                <p><a class='pick' href='index.html#doors'> pick a door </a></p>`

        this.appDom.appendChild(hiDOM);
    }
}

export { HiPage }