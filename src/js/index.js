import AddPasswordDiv from "./components/add/AddPasswordDiv";
// // import SavePassword from "./components/add/SavePassword";

let username = localStorage.getItem("username");

if (!username) {
	AddPasswordDiv();
	// SavePassword();
}
