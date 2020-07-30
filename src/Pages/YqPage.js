import { ElementsComp } from "../Classes/ElementsComp.js";
import { renderElement, renderQiDiv, renderYoQiPractice } from "../../utilitary.js";
import { qiStudy } from "../../Files/yoQi.js"

class YqPage{
    constructor(appDOM){
        this.appDOM = appDOM;
        this.study = qiStudy;
    }
    render(){
        const yoQi = renderElement('div', 'yqPage');
        yoQi.innerHTML = `<h3>. The Study Shelf</h3>`;
        
        const studyDiv = renderQiDiv(yoQi, qiStudy);
        const practice = renderYoQiPractice(yoQi);
        
        this.appDOM.appendChild(yoQi);
        // const elements = new ElementsComp(yoQi);
        // elements.render();
    }
}

export { YqPage }