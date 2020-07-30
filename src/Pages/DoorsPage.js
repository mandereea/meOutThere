import { Door } from '../Classes/Door.js';
import { renderElement } from '../../utilitary.js';


class DoorsPage {
    constructor(appDOM){
        this.appDOM = appDOM;
        this.codeSection = {
            tag: 'codeD',
            dataTarget: '#codeDeck',
            title: 'Code Room',
            story: ['This is where I keep myCodePractice.', 'You may check my previous projects, ordered as they came into being.', '.forEach: info, peek, gitHub link.'], 
            imgUrl:'../../images/codeDoor.png'
        }
        this.teaSection = {
            tag: 'teaD',
            dataTarget: '#tea',
            title: 'Tea Room',
            story: ['This is where myInnerHerbalist manifests.', 'iCode to organize my botanical friends.', '.forEach: details rooted in eastern traditions'],
            imgUrl:'../../images/teaDoor.png'
        }
        this.yqSection = {
            tag: 'yqD',
            dataTarget: '#yoQi',
            title: 'YoQi Room',
            story: ['This is myPractice space, which goes everywhere I go.', 'iCode to make it so.', '.forEach, any fellow travelerer welcomed to exchange notes'],
            imgUrl:'../../images/yqDoor.png'
        }
        //this.render();
    }

    render(){
        const doorsDiv = renderElement('div', 'doorsDiv');

        const codeDoor = new Door(doorsDiv, this.codeSection);
        const teaDoor = new Door(doorsDiv, this.teaSection);
        const yqDoor = new Door(doorsDiv, this.yqSection);

        this.appDOM.appendChild(doorsDiv);
    }
}

export { DoorsPage }