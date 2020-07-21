import { Door } from '../Classes/Door.js';


class DoorsPage {
    constructor(appDOM){
        this.appDOM = appDOM;
        this.codeSection = {
            tag: 'codeD',
            title: 'Code Room',
            story: 'this is the code room, where blah blah blah',
            imgUrl:'../../images/codeDoor.png'
        }
        this.teaSection = {
            tag: 'teaD',
            title: 'Tea Room',
            story: 'this is the code room, where blah blah blah',
            imgUrl:'../../images/teaDoor.png'
        }
        this.yqSection = {
            tag: 'yqD',
            title: 'YoQi Room',
            story: 'this is the code room, where blah blah blah',
            imgUrl:'../../images/yqDoor.png'
        }
        //this.render();
    }

    render(){
        const doorsDiv = document.createElement('div');
        doorsDiv.classList.add('doorsDiv');

        const codeDoor = new Door(doorsDiv, this.codeSection);
        const teaDoor = new Door(doorsDiv, this.teaSection);
        const yqDoor = new Door(doorsDiv, this.yqSection);

        console.log(codeDoor, teaDoor, yqDoor, doorsDiv)
        this.appDOM.appendChild(doorsDiv);
    }
}

export { DoorsPage }