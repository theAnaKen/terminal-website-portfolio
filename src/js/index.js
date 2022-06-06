import AddPasswordDiv from "./components/add/AddPasswordDiv";
// import SavePassword from "./components/add/SavePassword";

if (!localStorage.getItem("username")) {
	AddPasswordDiv();
	// SavePassword();
}
