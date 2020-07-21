import { Header } from './Pages/Header.js';
import { HiPage } from './Pages/hiPage.js';
import { CodeDeck } from './Pages/CodeDeck.js';
import { TeaPage } from './Pages/TeaPage.js';
import { YqPage } from './Pages/YqPage.js';
import { DoorsPage } from './Pages/DoorsPage.js';
import { FlowersField } from './Pages/FlowersField.js';
import { PauseFeature } from '../src/Classes/PauseFeature.js'
import { renderElement, changeCSS, renderInfo } from '../utilitary.js';
import { WelcomeForm } from './Classes/WelcomeForm.js';
// import { friends } from '../Files/Friends.js';

class App {
  constructor(appDOM) {
    this.appDOM = appDOM;
    this.pageContent = document.createElement('div');
    this.fieldOn = false;
    this.mood = 'afternoon';
    this.friends = [];
    this.render();
  }
  navigationEvent() {
    const links=document.querySelectorAll('a');
    //console.log(links);
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        this.renderPage(event.target.hash);
      })
    })
  }
  renderPage(hash) {
    this.pageContent.innerHTML='';
    switch(hash) {
      default:
        const hiPage = new HiPage(this.pageContent);
        hiPage.render();
        break;
      case '#codeDeck':
        const codeDeck = new CodeDeck(this.pageContent);
        codeDeck.render();
        break;
      case '#tea':
        const teaPage = new TeaPage(this.pageContent);
        teaPage.render();
        break;
      case '#yoQi':
        const yqPage = new YqPage(this.pageContent);
        yqPage.render();
        break;
      case '#doors':
          const doorsPage = new DoorsPage(this.pageContent);
          doorsPage.render();
          break;
    }
  }
  handleGuest(){
    const guestName = localStorage.getItem('name');
    if(guestName){
      document.querySelector('.username').innerHTML = `${guestName}`
    }else{
      const welcomeForm = new WelcomeForm(this.appDOM);
      welcomeForm.render();
    }
  }
  renderFlowerSwitch(){
    const flowerSwitch = renderElement('button', 'flowerSwitch','../images/flowerBtns/five.png');
    this.appDOM.appendChild(flowerSwitch);
    flowerSwitch.addEventListener('click',() => {
      if(this.fieldOn){
        this.fieldOn = false;
        this.appDOM.innerHTML='';
        this.render();
      }else{
        this.fieldOn = true;
        this.appDOM.innerHTML='';
        this.render();
      }
    });
    //console.log(flowerSwitch)
  }
  renderPauseBtn(){
    const pauseBtn = renderElement('button', 'pauseBtn');
    pauseBtn.innerHTML = 'pause';
    this.appDOM.appendChild(pauseBtn);

    pauseBtn.addEventListener('click',(e) => {
      e.preventDefault()
      const pause = new PauseFeature(this.appDOM);
      pause.render();
      //pause.move();
    });
  }
  renderFlowerField(hash){
    const fieldContainer = renderElement('div', 'field');
    const fieldLeft = new FlowersField(fieldContainer, 'left', hash);
    fieldLeft.render();
    const fieldRight = new FlowersField(fieldContainer, 'right', hash);
    fieldRight.render();
    
    //fieldContainer.classList.add(hash.slice(2));
    this.appDOM.appendChild(fieldContainer);
  }
  handleMood(){
    document.querySelector('.moodBtn').addEventListener('click', () =>{
      if(this.mood == 'afternoon'){
        changeCSS('night.css', 0);
        this.mood = 'night';
      }else{
        changeCSS('style.css',0);
        this.mood = 'afternoon';
      }
      
    })
    //changeCSS('night.css', 0);
  }
  render(){
    const header = new Header(this.appDOM);
    header.render();
    header.handleLogOut();
    this.renderFlowerSwitch();
    this.handleGuest();
    this.renderPauseBtn();
    this.renderPage(window.location.hash);
    if(this.fieldOn){
      this.renderFlowerField(window.location.hash)
    }
    this.appDOM.appendChild(this.pageContent);
    
    this.navigationEvent();
    this.handleMood();
   // this.handleWelcomeGuest();
    
  }
}

export { App }