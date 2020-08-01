import { renderElement } from '../../utilitary.js';

class CodeProject{
    constructor(DomEl, project){
        this.DomEl = DomEl;
        this.project = project;
        this.detailsDiv = false;
        
        this.render();
    }
    handleInfoBtn(event){
        const details = renderElement('div', 'infoDiv');
        details.innerHTML = `<p class='projDetails'>${this.project.details}</p>`
        const container = event.target.parentElement.parentElement;

        if(!this.detailsDiv){
            this.detailsDiv = true;
            container.appendChild(details);
        }else if(this.detailsDiv){
            this.detailsDiv = false;
            container.removeChild(container.lastChild)
        }
    }
    handlePlayBtn(){
        const playFrame = renderElement('div', 'playFrame');
        const closeBtn = renderElement('button', 'closeFrame', '../../images/codePractice/icons/closeBtn.png');
        closeBtn.addEventListener('click',(e) => {
            e.target.parentElement.remove();
        })
        playFrame.innerHTML = `<div class='frameTop'></div>
                               <iframe src=${this.project.viewLink} allow='geolocation'> </iframe>
                               <div class='frameBottom'></div>`
        // playFrame.src = `${this.project.viewLink}`;
        playFrame.appendChild(closeBtn);
        this.DomEl.parentElement.parentElement.appendChild(playFrame);
    }
    renderTitleDiv(title){
        const infoDiv = renderElement('div', 'titleDiv');
        infoDiv.innerHTML = `<h4 class='projDetails'>${title}</h4>`;

        const infoBtn = renderElement('button', 'infoBtn', '../../images/codePractice/icons/infoIcon.png');
        const playBtn = renderElement('button', 'infoBtn','../../images/codePractice/icons/play.png');
        const gitBtn = renderElement('button', 'infoBtn','../../images/codePractice/icons/gitIcon.png');

        // const infoBtn = renderElement('button', 'infoBtn');
        // const playBtn = renderElement('button', 'playBtn');
        // const gitBtn = renderElement('button', 'gitBtn');

        infoBtn.addEventListener('click', (e)=>{
            this.handleInfoBtn(e);
        });
        playBtn.addEventListener('click',(e) => {
            this.handlePlayBtn(e);
            scroll(0, 75);
        })
        gitBtn.addEventListener('click',() => {
            window.open(`${this.project.gitLink}`)
        })
        infoDiv.appendChild(infoBtn);
        infoDiv.appendChild(playBtn);
        infoDiv.appendChild(gitBtn);

        return infoDiv;
    }
    render(){
        const projDiv = renderElement('div', 'projDiv');
        projDiv.style.backgroundImage = `url(${this.project.imgSrc})`
        
        const infoDiv = this.renderTitleDiv(this.project.title,this.project.details);
        projDiv.appendChild(infoDiv);
        
        this.DomEl.appendChild(projDiv);
    }
}

export { CodeProject };