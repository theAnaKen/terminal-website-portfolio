import Password from "../Password";
import Username from "../Username";
import GetElementById from "../../utility/GetElementById";
import QuerySelector from "../../utility/QuerySelector";
import SavePassword from "./SavePassword";

//----------------------------------------------------------
let loginDiv = GetElementById("login");
const AddPasswordDiv = () => {
	loginDiv.innerHTML += Username;

	const usernameDiv = QuerySelector(".username");
	const usernameInputField = QuerySelector("input", usernameDiv);

	usernameInputField.addEventListener(
		"blur",
		(e) => {
			let usernameToSave = usernameInputField.value;
			localStorage.setItem("username", usernameToSave);
			loginDiv.innerHTML += Password;
			// input getting blank is totally a feature :)
			SavePassword();
		},
		{ once: true },
	);
};

export default AddPasswordDiv;
