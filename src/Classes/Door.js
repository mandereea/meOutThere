class Door{
    constructor(domEl, section){
        this.domEl = domEl;
        this.section = section;

        this.render();
    }
    render(){
        const door = document.createElement('div');
        door.classList.add('door');
        door.style.backgroundImage = `url(${this.section.imgUrl})`

        door.innerHTML = `<div class='doorScreen ${this.section.tag}'>
                            <h3>${this.section.title}</h3>
                            <p>${this.section.story}</p>
                          </div>`
        this.domEl.appendChild(door);
    }
}

export { Door }
    
