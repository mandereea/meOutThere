import { renderElement, renderLogOutBtn } from "../../utilitary.js";
import { WeatherApp } from "../Classes/Weather/WeatherApp.js";
import { ContactDiv } from "../Classes/ContactDiv.js";

class Header {
    constructor(appDOM) {
        this.appDOM = appDOM;
        this.weather = false;
        this.contact = false;
    }
    handleLogOut() {
        const userBtn = document.querySelector('.username');
        if(userBtn){
            userBtn.addEventListener('click', () => {
                renderLogOutBtn(userBtn);
            })
        }
        
    }
    handleWeather() {
        const weatherBtn = document.querySelector('.weatherBtn');
        weatherBtn.addEventListener('click', () => {
            if(!this.weather){
                WeatherApp();
                this.weather = true;
            }else{
                document.querySelector('.weatherWrapper').remove();
                document.querySelector('.dailyWrapper').innerHTML = '';
                document.querySelector('.dayContainer').innerHTML = '';
               // document.querySelector('.hourlylyWrapper').innerHTML = '';

                this.weather = false;
            }
            
        })
    }
    handleContact() {
        const contactBtn = document.querySelector('.contactBtn');
        console.log('cotactBtn')
        contactBtn.addEventListener('click', (e) => {
            //e.preventDefault();
            const header = e.target.parentElement.parentElement.parentElement
            if(!this.contact){
                const contactDetails = new ContactDiv (header);
                contactDetails.render();
                this.contact = true;
            } else {
                header.lastChild.remove();
                this.contact = false;
            }

        })
    }
    render() {
        // const header = document.createElement('header');
        // header.classList.add('headerContainer');
        const header = renderElement('header', 'headerContainer');
        header.innerHTML = `<a href='index.html'>Hi,</a>
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
                            <div class ='dailyWrapper'></div>
                            <div class='dayContainer'></div>
                            <div class='hourlyWrapper'></div>`

        this.appDOM.appendChild(header);
    }
}

export { Header }

//<button class='username'style='visibility:hidden;'></button>
