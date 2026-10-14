
const today = new Date();

const formatDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

document.querySelector("#dayofweek").textContent = formatDate;


const hamburgerButton = document.querySelector("#hamburger-btn");

const menu = document.querySelector("#menu");

hamburgerButton.addEventListener('click', () => { 
    menu.classList.toggle('hidden') 
   

});



   

window.addEventListener("load", (_event)=> {

    const studentReachedStats = document.querySelector(".stat-number");

    const SchoolsPartneredStats = document.querySelector("#Schools-partnered-stats");

      let randomNumberSchoolsPartneredStats = Math.floor(Math.random() * 1001);

      SchoolsPartneredStats.textContent = randomNumberSchoolsPartneredStats;

      console.log(randomNumberSchoolsPartneredStats)

      const  teachersTrainedStats = document.querySelector("#teachers-trained-stats");

      let randomteachersTrainedStats = Math.floor(Math.random() * 10000)

      teachersTrainedStats.textContent = randomteachersTrainedStats; 

      const graduationLiftStats = document.querySelector("#graduation-lift-stats");

      let randomgraduationLiftStats = Math.floor(Math.random() * 100.7)

      graduationLiftStats.textContent = randomgraduationLiftStats;


if(studentReachedStats){
    let randomNumber = Math.floor(Math.random() * 601);

studentReachedStats.textContent = randomNumber;}



});











