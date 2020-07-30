import { renderElement } from '../../utilitary.js';

class ContactDiv{
    constructor(domEl){
        this.domEl = domEl;
    }
    handleCloseContact(){
        const closeContact = document.querySelector('.closeContact');
        closeContact.addEventListener('click', (e) => {
            e.target.parentElement.innerHTML = '';
        })
    }
    render(){
        const contactDetails = renderElement('div','contactDetails');
        contactDetails.innerHTML = `<p> Email: <span> andreea79@gmail.com </span></br>
                                        Mobil: <span> 0742207019 </span></br>
                                        GitHub: <a href='https://github.com/mandereea' target='blank'> mandereea </a>
                                     </p>`
        
        this.domEl.appendChild(contactDetails);
    }
}

export { ContactDiv };