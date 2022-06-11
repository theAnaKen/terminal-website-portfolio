import AddPasswordDiv from "./components/add/AddPasswordDiv";
import Resize from "./components/ResizeInput";

let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

if (!username || !password) {
	AddPasswordDiv();
	Resize();
}
