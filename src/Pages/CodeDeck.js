import { CodeProject } from '../Classes/CodeProject.js';
import { projects } from '../../Files/projects.js';
import { renderToolKit, renderKitDetails, renderElement } from '../../utilitary.js'

class CodeDeck{
    constructor(appDOM){
        this.appDOM = appDOM;
        this.projects = projects;
    }
    renderStudy(){
        const study = renderElement('div', 'studyContainer');
        const toolKit = renderToolKit();
        const details = renderKitDetails();
        
        study.appendChild(details);
        study.appendChild(toolKit);
        
        return study;
    }
    renderPractice(){
        const practiceWrapper = renderElement('div', 'practiceWrapper');
        practiceWrapper.innerHTML = `<h3> The Practice </h3>`

        const practice = renderElement('div', 'practiceContainer');
        
        this.projects.map(project => {
            const projectDiv = new CodeProject(practice, project)
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
        
        this.appDOM.appendChild(code);
    }
}

export { CodeDeck }