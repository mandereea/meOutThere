import { renderElement } from "../../utilitary.js";

class RegisterForm{
    constructor(domEl, name){
        this.domEl = domEl;
        this.choice = '';
        this.name = name;
        this.email ='';
    }
    handleValidation(name, email){
        name && email ? true : false;
    }
    handleChoiceBtnClk(){
        const guestChoice = document.getElementsByName('guestChoice');
        console.log(guestChoice);
        guestChoice.forEach(choice => {
            if(choice.checked){
                this.choice = choice.value;
                localStorage.setItem('guestChoice', this.choice);
            }
        })
    }
    handleRegisterBtnClick(){
        const email = document.getElementById('email').value;
        localStorage.setItem('email', email);
    }
    renderRegister(){
        const registerForm = renderElement('form', 'registerForm');
        const registerBtn = renderElement('button','registerBtn');
        registerBtn.innerHTML = 'REGISTER';
        registerBtn.addEventListener('click',(e) => {
            e.preventDefault();
            this.handleRegisterBtnClick();
            e.target.parentElement.remove();
        })
        registerForm.innerHTML = `<input type='email' id='email' placeholder='your email, for my book of friends' />`
        registerForm.appendChild(registerBtn);
        return registerForm;
    }
    render(){
        const registerChoice = renderElement('form', 'registerChoice');
        const choiceBtn = renderElement('button', 'choiceBtn');
        choiceBtn.innerHTML = 'chose path'
        choiceBtn.addEventListener('click',(e) => {
            e.preventDefault();
            this.handleChoiceBtnClk();
            if(this.choice == 'makeFriend'){
                const regForm = this.renderRegister();
                e.target.parentElement.parentElement.appendChild(regForm);
                // e.target.parentElement.remove();
            }
            e.target.parentElement.remove();
        })
        //console.log(choiceBtn);
        registerChoice.innerHTML = `Just call me ${this.name} <input type='radio'name='guestChoice'value=${this.name} checked />
                                  I want to become a friend <input type='radio'name='guestChoice'value='makeFriend'>`
        registerChoice.appendChild(choiceBtn);

        this.domEl.appendChild(registerChoice);
    }
}

export { RegisterForm };