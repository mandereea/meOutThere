import { tasteDetails } from "./Files/teaLegend.js";

//                                           global
export function renderElement(element, className, imgSrc) {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(`${className}`);
    if (imgSrc) {
        newElement.style.backgroundImage = `url(${imgSrc})`;
    }
    return newElement;
}
export function renderBtn(className, text){
    const btn = renderElement('button', className);
    btn.innerHTML = text;
    return btn;
}
export function renderInfo(element,text){
    const infoDiv = renderElement('div', 'infoDiv');
    infoDiv.innerHTML = `<p>${text}</p>`;
    element.appendChild(infoDiv);
}

//                                           guest/friend section
export function renderGuestBtn() {
    const guestBtn = renderElement('button', 'guestBtn');
    guestBtn.innerHTML = 'guest';
    return guestBtn;
}
export function renderFriendBtn() {
    const friendBtn = renderElement('button', 'friendBtn');
    friendBtn.innerHTML = 'friend';
    return friendBtn;
}
export function addEmailBtn() {
    const registerBtn = renderElement('button', 'emailBtn');
    registerBtn.innerHTML = 'add contact';
    return registerBtn;
}
export function rememberGuest() {
    const nameInput = document.getElementById('guestName');
    const userName = document.querySelector('.username');
    userName.innerHTML = `${nameInput.value} ^`
    localStorage.setItem('name', nameInput.value);
    if(nameInput.value){
        nameInput.style.visibility = 'hidden';
    }else{ window.alert('empty name field')}
    
    nameInput.value == 'Andreea&Parola' ?
        document.querySelector('.contactBook').style.visibility = 'visible' : 
        document.querySelector('.contactBook').style.visibility = 'hidden';
    
    return nameInput.value;
}
export function rememberContact() {
    const contactInput = document.getElementById('email');
    localStorage.setItem('contact', contactInput.value);
    
    contactInput.style.visibility = 'hidden';

    const name = localStorage.getItem('name');
    document.cookie =`${name}=${contactInput.value}`;
}
export function ContactBookUser(){
    let cookies = document.cookie.split(';');
    console.log(cookies)
    cookies.forEach(cookie => {
        const contactBook = document.querySelector('.contactBook');
        contactBook.innerHTML += `<span>${cookie}</span>`;
    })
}

export function renderLogOutBtn(element){
    const logOutBtn = renderBtn('logOut', 'Good bye');
    logOutBtn.addEventListener('click', (e) => {
        clearLocalStoage();
        location.reload();
    })
    element.parentElement.appendChild(logOutBtn);
}
export function clearLocalStoage(){
    localStorage.removeItem('name');
    localStorage.removeItem('contact');
}
//                                codeDeck
export function renderToolKit() {
    const toolKit = document.createElement('div');
    toolKit.classList.add('toolKit');

    toolKit.innerHTML = `<h3>The ToolBox</h3>
                         <img src='./images/codePractice/icons/kitIcons.png'alt='icons'/>`
    return toolKit;
}

export function renderKitDetails() {
    const kitDetails = renderElement('div', 'kitDetails');

    kitDetails.innerHTML = `<h3>The Concepts</h3>
                            <h4><b> Frontend Development (JavaScript) </b>
                                <span> - The Informal School of IT (03.02.20 – 13.07.20)</span></h4>
                            <p> <b> > Web Concepts: </b> How the web works, Client-Server architecture, protocols</p>
                            <p> <b> > HTTP: </b> fundamentals about the protocol: methods, status codes, headers, cookies and
                                sessions</p>
                            <p> <b> > HTML and CSS: </b> how to build a responsive User Interface with semantic HTML elements</p>
                            <p> <b> > JS: </b> how to use variables, primitive types, functions, hoisting, objects, scope,
                                    DOM, AJAX & Promises </p>
                            <p> <b> > OOP in JavaScript: </b> prototypes, classes and inheritance in JavaScript</p>
                            <p> <b> > GIT: </b> principles and basic commands</p>
                            <p> <b> > React JS: </b> how modern JS applications work, React components, props, state, JSX</p>`

    return kitDetails;
}

export function renderFrameBtn(name, link) {
    const btn = document.createElement('button');
    btn.classList.add('frameBtn');
    btn.innerHTML = `${name}`;

    btn.addEventListener('click', () => {
        console.log(e.target.parentElement.parentElement, link)
    })
    return btn;

}

//                          Flower Field & Flower Items
export function getTemperament(section) {
    const sectionArr = section.split(' ');
    const isWarm = sectionArr.includes('Warm') || sectionArr.includes('Hot');
    const isCold = sectionArr.includes('Cold') || sectionArr.includes('Cool');   // console.log(sectionArr, isCold);
    if (isCold) {
        return 'coldTemp';
    } else if(isWarm) {
        return 'warmTemp';
    } else {
        return 'neutral';
    }
}
export function getTaste(section){
    const tastesDiv = renderElement('div', 'herbTasteDiv');
    const herbTastes = section.split(' ');
    //console.log(herbTastes)
    const iconsArr = [];
    if(herbTastes.includes('B')){
        iconsArr.push('Bitter');
       // renderTasteIcon('Bitter')
    }
    if(herbTastes.includes('S')){
        iconsArr.push('Sweet');
       // renderTasteIcon('Sweet');
    }
    if(herbTastes.includes('P')){
        iconsArr.push('Pungent');
        //renderTasteIcon('Pungent');
    }
    if(herbTastes.includes('So')){
        iconsArr.push('Sour');
        //renderTasteIcon('Sour');
    }
    if(herbTastes.includes('Sa')){
        iconsArr.push('Salty');
        //renderTasteIcon('Salty');
    }
    iconsArr.forEach(taste =>{
        const tasteIcon = renderTasteIcon(taste);
        console.log(tasteIcon);
        tastesDiv.appendChild(tasteIcon);
    })
    return tastesDiv;



    // const isBitter = herbTastes.includes('B');
    // const isSweet = herbTastes.includes('S');
    // const isPungent = herbTastes.includes('P');
    // const isSour = herbTastes.includes('So');
    // const isSalty = herbTastes.includes('Sa');

    // if(isBitter) {
    //     return 'Bitter';
    // } else if(isSweet) {
    //     return 'Sweet';
    // } else if(isPungent) {
    //     return 'Pungent';
    // } else if(isSour) {
    //     return 'Sour';
    // } else if(isSalty) {
    //     return 'Salty';
    // }
}
                                                                        //Mood
export function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
                                            //Pause
 
export function getRandom(arr){
    const randomEl = arr[Math.floor(Math.random() * arr.length)];
    return randomEl;
}
//                                  Pause  /   Breath Feature
export function renderBreathDetails(breath){
    const breathDiv = renderElement('div', 'breathDiv');
    breathDiv.innerHTML= `<h2><b>try</b> ${breath.name}</h2>
                          <p>${breath.expl}</p>
                          <p><b> Best time:</b> ${breath.bestTime[0]}</p>
                          <p><b> Best results:</b> ${breath.bestResults}</p>
                          <p><b> Benefits: </b> ${breath.benefits}</p>
                          <p><b> Technique: </b> ${breath.technique}</p>
                          <img src=${breath.gif} />`
    return breathDiv;
}  
export function renderBreath(domEl, need, breath){
    if(need == 'yin'){
        const randomYin = getRandom(breath);
        const yinBreath = renderBreathDetails(randomYin);
        domEl.appendChild(yinBreath)
    }else if(need == 'yang'){
        const randomYang = getRandom(breath);
        const yangBreath = renderBreathDetails(randomYang);
        
        domEl.appendChild(yangBreath)
    }
}
export function renderBar(domEl, need){
    const pauseBarWrapper = renderElement('div', 'pauseBarWrapper');
    // const startPause = renderBtn('startPause','Start');
    const startPause = renderElement('button', 'startPause','./images/bells/purpleLight.png');
    startPause.addEventListener('click',() => {
        const deLoad = document.querySelector('.pauseDeLoading');  
        const time = document.querySelector('.pauseTime').value;

        if(time){
            need == 'yin' ?  deLoading (deLoad, time * 600) :  loading(deLoad, time * 600);
        } else{
            need == 'yin' ?  deLoading (deLoad, 600) :  loading(deLoad, 600);
        }
       
    })
    pauseBarWrapper.innerHTML = `<b>Pick a time: </b><input type='number'class='pauseTime' placeholder= '1' /> minute(s) and ring the bell to start.
                                <div class='pauseBarContainer'>
                                <div class='pauseDeLoading'></div>
                                </div>`
    pauseBarWrapper.appendChild(startPause)
    domEl.appendChild(pauseBarWrapper);
}
export function deLoading(element, time){   
    let width = 100;
    let id = setInterval(frame, time);
    function frame() {
        if (width <= 0) {
            clearInterval(id);
        } else {
            width--; 
            element.style.width = width + '%';
            element.style.backgroundColor = '#fe930a';
            element.parentElement.style.backgroundColor = '#0ecbd7' 
            // element.innerHTML =  'Cooling'; 
            // element.style.textAlign = 'right'
        }
    }
}
export function loading(element, time){
    let width = 0;
    let path = '';
    let id = setInterval(frame, time);
    function frame() {
        if (width >= 100) {
        clearInterval(id);
        } else {
        width++;                                        //increase width, create container fitting path
        width % 2 == 0 ? path += '..' : path += '.';
        element.style.width = width + '%'; 
        element.style.backgroundColor = '#fe930a';         // change bar css
        element.parentElement.style.backgroundColor = '#0ecbd7' 
        element.innerHTML = 'Energizing'+ path + width * 1  + '%';
        }
    }
    console.log('loading')
}

//                                     Elements    
export function renderQiEl(domEl, element){
    const elementDiv = renderElement('div', 'elementDiv');
    elementDiv.style.backgroundColor = element.color[0];
    elementDiv.style.color = element.color[1];
    elementDiv.innerHTML = `<div><h3 class='elemTitle'>${element.name}: <b> ${element.taste}</b></h3> 
                            <p><b>${element.organs}</b></p>
                            <p class='elEmotion'>Emotion: ${element.emotion}</p></div>
                            <p class='elShort'>${element.short}</p>`
    domEl.appendChild(elementDiv);
}
export function renderQiDiv(domEl, array){
    const studyDiv = renderElement('div', 'qiStudy');
    array.forEach(element => {
        const qiDiv = renderElement('div', 'studyDiv');
        qiDiv.innerHTML = `<img src='${element.imgSrc}' />
                           <p> ${element.title} </p>`
        studyDiv.appendChild(qiDiv);
    })

    domEl.appendChild(studyDiv);
}

export function renderYoQiPractice(domEl){
    const practiceDiv = renderElement('div','practiceDiv');
    practiceDiv.innerHTML =`
                            <div class='practiceLeft'>
                                <h3>.The Practice: </h3>
                                <p><b>BaDuanJin </b>- Eight Pieces of Silk Brocade</p>
                                <p><b>Wu Xing </b>- Five Elements Harmony</p>
                                <p><b>Shibashi </b>- 18 Forms</p>
                                <p><b>Yi Jin Jing</b></p>
                                <p><b>WuJi</b></p>
                            </div>
                            <div class='practiceRight'>
                                <p><b>Dharana</b></p>
                                <p><b>PratyAhara</b></p>
                                <p><b>Shavasana </b>relaxation</p>
                                <p><b>Pranayama </b>- Breathing techniques</p>
                                <p><b>Asanas - Surya namaskar </b>-Sun Salutation</p>
                            </div>`
    domEl.appendChild(practiceDiv);
}

//                                                      teaPage
export function renderHerbsLeft(domEl){
    const teaLeft = renderElement('div', '.herbsLeft');
    teaLeft.innerHTML = `<h3> The Lenses:</h3>
                        <p><a href='#'> Temperament </a> </p>
                        <p><a href='#'> Taste </a></p>
                        <p><a href='#'> Meridians afinity </a></p>
                        <p><a href='#'> Skill / Antagonists </a></p> 
                        <p><a href='#'> Land's knowledge </a></p>`
    domEl.appendChild(teaLeft);
}

export function renderTasteIcon(taste){
    const tasteIcon = renderElement('div','tasteIcon');
    switch(taste){
        case 'Bitter':
            tasteIcon.style.backgroundColor = '#B8CBA1';
            break;
        case 'Sweet':
            tasteIcon.style.backgroundColor = '#F9C5E7';
            break;
        case 'Pungent':
            tasteIcon.style.backgroundColor = '#FCD4BE';
            break;
        case 'Sour':
            tasteIcon.style.backgroundColor = '#fdff83';
            break;
        case 'Salty':
            tasteIcon.style.backgroundColor = '#a2f3ea';
            break;
    }
    return tasteIcon;
}
// export function renderTaste(domEl, taste, text){
//     const tasteDet = renderElement('div', 'taste');
//     const tasteIcon = renderTasteIcon( taste)
//     tasteDet.innerHTML = ` <span> ${tasteIcon()}</span>
//                             <p><span>${taste}:</span> ${text}</p>`
    
//     domEl.appendChild(tasteDet);
    
// }
export function renderTastes(domEl){
    const tastesDiv = renderElement('div', 'tastesDiv');
    tastesDiv.innerHTML = `<p>The Five Elements theory states that the taste of herbal ingredients is a key determinant of their action </p>`;
    console.log(tasteDetails)
    
    tasteDetails.forEach(tasteObj => {
        const tasteDet = renderElement('div', 'taste');
        const tasteIcon = renderTasteIcon( tasteObj.taste);
        const tasteText = renderElement('div','tasteText');
        
        tasteText.innerHTML = `<p><b>${tasteObj.taste}</b> ${tasteObj.action}</p>
                              <p>${tasteObj.afinity}</p>`

        tasteDet.appendChild(tasteIcon);
        tasteDet.appendChild(tasteText);
        
        tastesDiv.appendChild(tasteDet);
    })
    
    domEl.appendChild(tastesDiv);
}   




