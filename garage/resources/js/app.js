import './bootstrap';


const mainContent = document.querySelector('.--content');
if (mainContent) {
    const mainForm = mainContent.querySelector('form');
    mainContent.querySelectorAll('select')
        .forEach(s => s.addEventListener('change', () => mainForm.submit()));
}



const breakdown = document.querySelector('#breakdown');
const trucksList = breakdown.querySelector('#trucks-list');
const mechanicId = breakdown.querySelector('[name=mechanic_id]')
if (breakdown) {
    mechanicId.addEventListener('change', () => {
        if (mechanicId.value === '0') {
            trucksList.innerHTML = '';
        }
        console.log(mechanicId.value);
    });
}