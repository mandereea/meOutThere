class YqPage{
    constructor(appDOM){
        this.appDOM = appDOM;
    }
    render(){
        const yoQi = document.createElement('div');
        yoQi.classList.add('yqPage');
        
        yoQi.innerHTML = '<p>this is the YoQi room</p>';

        this.appDOM.appendChild(yoQi);
    }
}

export { YqPage }