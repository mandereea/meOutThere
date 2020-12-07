import { renderElement, rememberGuest, renderGuestBtn, renderFriendBtn, addEmailBtn, rememberContact, renderBtn } from '../../utilitary.js';

class WelcomeForm {
    constructor(DomEl) {
        this.DomEl = DomEl
    }
    renderContactInput(){
        const registerForm = renderElement('form', 'emailForm');
        const registerBtn = addEmailBtn();
        registerBtn.addEventListener('click',(e) => {
            e.preventDefault();
            rememberContact();
            //rememberFriend();
            e.target.parentElement.remove();
        })
        registerForm.innerHTML = `<input type='email' id='email' placeholder='your choice of contact' />`
        registerForm.appendChild(registerBtn);
        return registerForm;
    }
    render() {
        const guestForm = renderElement('form', 'guestForm');
        const btnsDiv = renderElement('div','btnsDiv');
       
        const guestBtn = renderGuestBtn();
        const friendBtn = renderFriendBtn();
        
        guestBtn.addEventListener('click',(e) => {
            e.preventDefault();
            //const user = this.rememberGuest();
            const inputUsername = rememberGuest();
            if(inputUsername){
                e.target.parentElement.remove();
                // const nameWrapper = document.querySelector('.nameWrapper');
                // const userName = renderBtn('username', inputUsername);
                // nameWrapper.appendChild(userName);
            }
        })
        friendBtn.addEventListener('click',(e) => {
            e.preventDefault();
            const username = rememberGuest();
            if(username){
                const addEmail = this.renderContactInput();
                e.target.parentElement.parentElement.appendChild(addEmail);
                e.target.parentElement.remove();
            }
        })
        btnsDiv.appendChild(guestBtn);
        btnsDiv.appendChild(friendBtn);
        
        guestForm.innerHTML = `<input type='text' class='nameInput'id='guestName'name='guestName' placeholder='you' autofocus />`
       
        guestForm.appendChild(btnsDiv);
        this.DomEl.appendChild(guestForm);
    }
}

export { WelcomeForm };