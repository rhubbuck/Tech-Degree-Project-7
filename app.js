const alertBox = document.getElementById('alert');
const alertIcon = document.getElementById('header-svg-icon');
const dot = document.getElementById('dot');
const popup = document.getElementById('popup');
const bell = document.getElementById('bell');
const notification = document.getElementById('notifications');
const userName = document.getElementById('form-user-field');
const message = document.getElementById('message-input');
const form = document.getElementById('form');
const trafficList = document.getElementById('traffic-list');
const trafficLinks = document.getElementsByClassName('traffic-nav-link');
//preloaded alert box

alertBox.innerHTML = `
    <div class = 'alertBanner'>
        <p><strong>Alert</strong>: You have 0 unread messages.</p>
    </div>
    <p class = 'closeAlert'>x</p>
    `;
    
alertBox.addEventListener ('click', (e) => {
    let target = e.target;
    if (target.classList.contains('closeAlert')) {
        alertBox.style.display = 'none';
    }
 });

//popup when bell selected

let messageShown; 

function createPopup (){
if (popup.childNodes.length == 0 && dot.style.display !== 'none') {
    for ( let i = 0; i < 2; i++) {
            alertWindow = document.createElement('div');
            alertWindow.id = 'popupMessage';
            alertWindow.innerHTML = `
            <p>You have a friend request!</p>
            <p class='message-close'>X</p> 
            `;
            popup.appendChild(alertWindow);
            }
        }
        popup.style.display = 'none';
    }
createPopup();

notifications.addEventListener('click', (e) =>{
    dot.style.display = 'none';
    let element = e.target;
    if (element.className !== 'message-close'){
        if(!messageShown){
            popup.style.display = "block";
            messageShown=true;
        }
        else{
            popup.style.display = "none";
            popup.style.width = '1vw';
            messageShown= false;
        }
    }
});

popup.addEventListener('click', (e) =>{
    let element = e.target;
    if ( element.classList.contains('message-close')){
        const parentNode = element.parentNode;
        parentNode.parentNode.classList.add('hiddenPopup');
        parentNode.parentNode.removeChild(parentNode);
        }
});

// user search bar
form.addEventListener('submit', (e) => {
    if (userName.value === '' && message.value === '') {
        alert('Enter a name and message before sending.');
    } else if ( userName.value === '') {
        alert('Enter a name to send your message to.');
    } else if ( message.value === '') {
        alert('Enter a message to send.');
    } else {
        alert('Message successfully sent!');
    }
});

//local storage

const emailCheckbox = document.getElementById('emailSetting');
const publicCheckbox = document.getElementById('publicSetting');
const timezone = document.getElementById('timezone');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

function saveSettings () {
    localStorage.setItem('emailSetting', emailCheckbox.checked);
    localStorage.setItem('publicSetting', publicCheckbox.checked);
    localStorage.setItem('timezoneSetting', timezone.value);
}

function load () {
    let emailSettingValue = JSON.parse(localStorage.getItem('emailSetting'));
    let publicSettingValue = JSON.parse(localStorage.getItem('publicSetting'));
    let timezoneSettingValue = localStorage.getItem('timezoneSetting');
    emailCheckbox.checked = emailSettingValue;
    publicCheckbox.checked = publicSettingValue;
    if (timezoneSettingValue !== null) {
        timezone.value = timezoneSettingValue;
    }
};

function clearStorage () {
    localStorage.clear();
    location.reload();
}

saveButton.addEventListener('click', (e) => {
    saveSettings();
});

cancelButton.addEventListener('click', (e) => {
    clearStorage();
});

load();

// set traffic chart active state
const hourlyLink = document.getElementById('hourly-select');
const dailyLink = document.getElementById('daily-select');
const weeklyLink = document.getElementById('weekly-select');
const monthlyLink = document.getElementById('monthly-select');

function setNavLinkActive (navLinkVar) {
    navLinkVar.addEventListener('click', (e) => {
        let elements = document.getElementsByClassName('traffic-nav-link');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
         }
         navLinkVar.classList.add('active');
        })
};

setNavLinkActive(dailyLink);
setNavLinkActive(hourlyLink);
setNavLinkActive(weeklyLink);
setNavLinkActive(monthlyLink);