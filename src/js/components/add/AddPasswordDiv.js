// import Password from "../Password";
import Username from "../Username";
import GetElementById from "../../utility/GetElementById";
import QuerySelector from "../../utility/QuerySelector";
// import SavePassword from "./SavePassword";
import HandleLogin from "../HandleUsername";

//----------------------------------------------------------
let loginDiv = GetElementById("login");
const AddPasswordDiv = () => {
	loginDiv.innerHTML += Username;

	const usernameDiv = QuerySelector(".username");
	const usernameInputField = QuerySelector("input", usernameDiv);

	usernameInputField.addEventListener(
		"blur",
		(e) => {
			HandleLogin();
		},
		{ once: true },
	);
	usernameInputField.addEventListener(
		"keypress",
		(e) => {
			// console.log(e);
			e.key === "Enter" ? HandleLogin() : console.log("Hello, World!");

			// console.log("Hello, World!");
		},
		// { once: true },
	);
};

export default AddPasswordDiv;
