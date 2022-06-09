import AddPasswordDiv from "./components/add/AddPasswordDiv";

let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

if (!username || !password) {
	AddPasswordDiv();
}
