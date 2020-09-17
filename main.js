/* main.js */

window.onload = () => {
	const loginForm = document.getElementById("loginForm");
	loginForm["loginButton"].addEventListener("click", () => {
		let userName = loginForm["userName"].value;
		let password = loginForm["password"].value;

		if (loginForm["saveProfile"].checked === true) {
			localStorage.setItem("userName", userName);
			localStorage.setItem("password", password);
		}
		alert("now loading...");
	})
}

const autoFill = () => {
	if (localStorage.getItem("userName") != undefined) {
		// localStorageにuserNameの情報があるときオートフィルを行なう
	}
}
