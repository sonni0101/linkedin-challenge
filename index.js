const username = 'Sonni Chen,';
const job = 'Sr product designer';
const profileImage = "./assets/images/green.png";


const usernameElem = document.querySelectorAll(".profile-title-name");
const userjobElem = document.querySelector(".profile-title-job");
const userimageElem = document.querySelectorAll(".profile-img");

for(let userName of usernameElem){
    userName.innerHTML = username;
}

userjobElem.innerHTML = job;

for(let userImage of userimageElem){
    userImage.src = profileImage;
}