/* main.js */

window.onload = () => {
	const loginForm = document.getElementById("loginForm");
	//autoFill();
	loginForm["loginButton"].addEventListener("click", () => {
		saveProfile();
		alert("now loading...");
	})
}

const saveProfile = () => {
	let userName = loginForm["userName"].value;
	let password = loginForm["password"].value;

	if (loginForm["saveProfile"].checked === true) {
		localStorage.setItem("userName", userName);
		localStorage.setItem("password", password);
	}
}

const autoFill = () => {
	if (localStorage.getItem("userName") != undefined) {
		// localStorageにuserNameの情報があるときオートフィルを行なう
		loginForm["userName"].value = localStorage.getItem("userName");
		loginForm["password"].value = localStorage.getItem("password");
	}
}
