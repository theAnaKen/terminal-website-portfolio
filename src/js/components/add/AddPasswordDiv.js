import Password from "../Password";
import Username from "../Username";
import GetElementById from "../../utility/GetElementById";
import QuerySelector from "../../utility/QuerySelector";
import SavePassword from "./SavePassword";

//----------------------------------------------------------
let loginDiv = GetElementById("login");

loginDiv.innerHTML += Username;

const usernameDiv = QuerySelector(".username");
const usernameInputField = QuerySelector("input", usernameDiv);

const AddPasswordDiv = () => {
	usernameInputField.addEventListener(
		"blur",
		(e) => {
			let usernameToSave = usernameInputField.value;
			localStorage.setItem("username", usernameToSave);
			loginDiv.innerHTML += Password;

			SavePassword();
		},
		{ once: true },
	);
};

export default AddPasswordDiv;
