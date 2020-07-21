import { FlowersField } from '../Pages/FlowersField.js';

class TeaPage{
    constructor(appDOM){
        this.appDOM = appDOM;
    }
    render(){
        const teaPg = document.createElement('div');
        teaPg.classList.add('teaPage');

        teaPg.innerHTML = '<p>this is the tea room</p>';
        const flowerBtn = new FlowersField(teaPg);
        flowerBtn.render();

        this.appDOM.appendChild(teaPg);
    }
}

export { TeaPage }