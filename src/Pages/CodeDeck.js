//import {} from '../../images/codePractice/aWise.png';
import { CodeProject } from '../Classes/CodeProject.js';
import { projects } from '../../Files/projects.js';
import { renderToolKit, renderKitDetails, renderElement } from '../../utilitary.js'

class CodeDeck{
    constructor(appDOM){
        this.appDOM = appDOM;
        // this.project = {
        //     imgSrc:'../../images/codePractice/aWise.png',
        //     info : 'this project aims to blah blah blah'
        //}
        this.projects = projects;
    }
    renderStudy(){
        const study = document.createElement('div');
        study.classList.add('studyContainer');

        const toolKit = renderToolKit();
        const details = renderKitDetails();
        
        study.appendChild(details);
        study.appendChild(toolKit);
        
        return study;
    }
    renderPractice(){
        const practiceWrapper = document.createElement('div');
        practiceWrapper.classList.add('practiceWrapper');
        practiceWrapper.innerHTML = `<h3> The Practice </h3>`

        const practice = document.createElement('div');
        practice.classList.add('practiceContainer');

        this.projects.map(project => {
            const projectCeva = new CodeProject(practice, project)
        });

        practiceWrapper.appendChild(practice)
        return practiceWrapper;
    }
    render(){
        const code = document.createElement('div');
        code.classList.add('codeDeck');


        const study = this.renderStudy();
        const practice = this.renderPractice();
        
        code.appendChild(study);
        code.appendChild(practice);
        

        // console.log(projectDiv)
        this.appDOM.appendChild(code);
    }
}

export { CodeDeck }