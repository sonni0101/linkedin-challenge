const loadUserProfile = () =>{
    const usernameElem = document.querySelectorAll(".data-username");
    const jobTitleElem = document.querySelector(".data-jobtitle");
    const profilePicElem = document.querySelectorAll(".data-profilepic");

    for (let el of usernameElem){
        el.innerHTML = userProfile.username;
    }

    jobTitleElem.innerHTML = userProfile.jobtitle;

    for(let pro of profilePicElem){
        pro.src = userProfile.profilepic;
    }
};

const createPost = () => {
	const username = document.querySelector(".data-username").innerHTML;
	const post = document.querySelector(".data-post").value;
	console.log("username, post", username, post);

	if (post) {

		const parentDiv = document.querySelector(".posts");

		const postsItemDiv = document.createElement("div");
		postsItemDiv.classList.add("posts__item");

		const postsUsernameDiv = document.createElement("div");
		postsUsernameDiv.classList.add("posts__username");
		postsUsernameDiv.innerText = username + " Posted";

		const postsContentDiv = document.createElement("div");
		postsContentDiv.classList.add("posts__content");
		const postcontent = document.createElement("p");
		postcontent.innerHTML = post;
		postsContentDiv.append(postcontent);

		const postsLikeDiv = document.createElement("div");
		postsLikeDiv.classList.add("posts__like");

        postsItemDiv.append(postsUsernameDiv);
		postsItemDiv.append(postsContentDiv);
		postsItemDiv.append(postsLikeDiv);

		parentDiv.prepend(postsItemDiv);
	} else {
		alert("Error: your input shouldn't be empty!");
	}
};