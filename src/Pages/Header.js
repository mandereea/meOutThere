import { renderElement, renderLogOutBtn } from "../../utilitary.js";

class Header {
    constructor(appDOM) {
        this.appDOM = appDOM;
      }
    handleLogOut(){
        const userBtn = document.querySelector('.username');
        userBtn.addEventListener('click',(e) => {
            renderLogOutBtn(userBtn);
        })
    }
    render(){
        // const header = document.createElement('header');
        // header.classList.add('headerContainer');
        const header = renderElement('header', 'headerContainer');
        header.innerHTML = `<header><a href='index.html'>Hi,</a>
                                <navbar class='navBar'>
                                    <div class='navLinks'>
                                        <button class='codeBtn'><a href='index.html#codeDeck'> Code Deck </a> </button>
                                        <button class='teaBtn'><a href='index.html#tea'> Tea Pavilion </a> </button>
                                        <button class='yqBtn'><a href='index.html#yoQi'> YoQi </a> </button>
                                    </div>
                                    <div class='nameWrapper'>
                                        <button class='username'></button>
                                    </div>
                                    <div class='userDiv'>
                                        <button class='moodBtn'> Mood </button>
                                        <button class='weatherBtn'> Weather </button>
                                        <button class='contactBtn'> Contact </button>
                                    </div>
                                </navbar>
                            </header>`
        this.appDOM.appendChild(header);
    }
}

export { Header }

{/* <div class='guestBtnDiv'>
                                        <button class='visitorBtn'> new guest </button> 
                                        <button class='visitorBtn'> dear guest </button>
                                    </div> */}
