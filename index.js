// document.querySelector(".profile-title-name").innerHTML="Sony, ";
// document.querySelector(".profile-title-job").innerHTML="Account";

// document.querySelector(".profile-img").src = "./assets/images/green.png";
// document.querySelector(".profile-img-2").src = "./assets/images/green.png";

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