const tabButtons = document.querySelectorAll('.tab-btn');
const jobPanels = document.querySelectorAll('.job-panel');

tabButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
//remove 'active' class from all buttons and panels 
tabButtons.forEach((btn) => btn.classList.remove('active'));
jobPanels.forEach((panel)=> panel.classList.remove('active'));

//add active class to click the button 
button.classList.add('active');
//find matching panel using data-target and show it 
const targetId = button.getAttribute('data-target'); 
document.getElementById(targetId).classList.add('active');
    });
});