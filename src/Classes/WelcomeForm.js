import { renderElement, rememberGuest, renderGuestBtn, renderFriendBtn, addEmailBtn, rememberEmail } from '../../utilitary.js';
import { rememberFriend } from '../../Files/Friends.js'
// import { RegisterForm } from './RegisterForm.js';


class WelcomeForm {
    constructor(DomEl) {
        this.DomEl = DomEl
    }
    renderRegister(){
        const registerForm = renderElement('form', 'emailForm');
        const registerBtn = addEmailBtn();
        registerBtn.addEventListener('click',(e) => {
            e.preventDefault();
            rememberEmail();
            rememberFriend();
            e.target.parentElement.remove();
        })
        registerForm.innerHTML = `<input type='email' id='email' placeholder='your choice of contact' />`
        registerForm.appendChild(registerBtn);
        return registerForm;
    }
    render() {
        const guestForm = renderElement('form', 'guestForm');
        const btnsDiv = renderElement('div','btnsDiv');
        // const guestBtn = renderElement('button', 'guestBtn');
        // guestBtn.innerHTML = 'guest';

        // const friendBtn = renderElement('button', 'friendBtn');
        // friendBtn.innerHTML = 'friend';
        const guestBtn = renderGuestBtn();
        const friendBtn = renderFriendBtn();
        guestBtn.addEventListener('click',(e) => {
            e.preventDefault();
            //const user = this.rememberGuest();
            const username = rememberGuest();
            if(username){
                e.target.parentElement.remove();
            }else{
                window.alert('n-ai pus nume, bre!');
                //this.render();
            }
        })
        friendBtn.addEventListener('click',(e) => {
            e.preventDefault();
            const username = rememberGuest();
            if(username){
                const addEmail = this.renderRegister();
                e.target.parentElement.parentElement.appendChild(addEmail);
                e.target.parentElement.remove();
            }
        })
        btnsDiv.appendChild(guestBtn);
        btnsDiv.appendChild(friendBtn);
        guestForm.innerHTML = `<input type='text' class='nameInput'id='guestName'name='guestName' placeholder='you' autofocus />`
        // guestForm.appendChild(guestBtn);
        // guestForm.appendChild(friendBtn);
        guestForm.appendChild(btnsDiv);
        this.DomEl.appendChild(guestForm);
    }
}

export { WelcomeForm };