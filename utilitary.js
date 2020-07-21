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
    nameInput.addEventListener('input', (e) => {
        userName.textContent = e.target.value;
        console.log(nameInput);
    });

    userName.innerHTML = `${nameInput.value}  ^`
    localStorage.setItem('name', nameInput.value);
    nameInput.style.visibility = 'hidden';

    return nameInput.value;
}
export function rememberEmail() {
    const emailInput = document.getElementById('email');
    localStorage.setItem('email', emailInput.value);

    emailInput.style.visibility = 'hidden';

    //return emailInput.value;
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
    localStorage.removeItem('email');
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
    const kitDetails = document.createElement('div');
    kitDetails.classList.add('kitDetails');

    kitDetails.innerHTML = `<h3>The Thingy</h3>
                            <h4>The Informal School of IT – Web Development (JavaScript) 03.02.2020 – 13.07.2020</h4>
                            <p> Web Concepts: How the web works, Client-Server architecture, protocols</p>
                            <p> HTTP: fundamentals about the protocol: methods, status codes, headers, cookies and
                                sessions</p>
                            <p> HTML and CSS: how to build a responsive User Interface with semantic HTML elements</p>
                            <p> JS: how to use variables, primitive types, functions, hoisting, objects, scope,
                                DOM, AJAX & Promises</p>
                            <p> OOP in JavaScript: prototypes, classes and inheritance in JavaScript</p>
                            <p> GIT: learned the principles and basic commands</p>
                            <p> React JS: how modern JS applications work, React components, props, state, JSX</p>`

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

//                          Flower Field & Flower Item
export function getTemperament(section) {
    const sectionArr = section.split(' ');
    const isCold = sectionArr.includes('Cold')
    console.log(sectionArr, isCold);
    if (isCold) {
        return 'coldTemp';
    } else {
        return 'warmTemp';
    }
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
export function renderBreathDetails(breath){
    const breathDiv = renderElement('div', 'breathDiv');
    breathDiv.innerHTML= `<h2>${breath.name}</h2>
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
        // const gif = renderElement('img', 'yGif');
        // if(breath.gif){
        //     gif.setAttribute('src', breath.gif);
        //     yangBreath.appendChild(gif);
        // }
        
        domEl.appendChild(yangBreath)
    }
}
export function renderBar(domEl, need){
    const pauseBarWrapper = renderElement('div', 'pauseBarWrapper');
    const startPause = renderBtn('startPause','Start');
    startPause.addEventListener('click',() => {
        const deLoad = document.querySelector('.pauseDeLoading');  
        const time = document.querySelector('.pauseTime').value;

        if(time){
            need == 'yin' ?  deLoading (deLoad, time * 600) :  loading(deLoad, time * 600);
        } else{
            need == 'yin' ?  deLoading (deLoad, 600) :  loading(deLoad, 600);
        }
       
    })
    pauseBarWrapper.innerHTML = `<b>Time: </b><input type='number'class='pauseTime' placeholder= '1' /> minute(s)
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
            
           // element.innerHTML =  width * 1  + '%'+ newPath + 'cooling';
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
        width++; 
        path+='..'
        element.style.width = width + '%'; 
        element.innerHTML = 'Energizing'+path + width * 1  + '%';
        }
    }
    console.log('loading')
}




