const alertBox = document.getElementById('alert');
const alertIcon = document.getElementById('header-svg-icon');
const dot = document.getElementById('dot');

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
        dot.style.opacity = '0';
    }
 });
