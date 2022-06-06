import Password from "../Password";
import Username from "../Username";
import GetElementById from "../../utility/GetElementById";
import QuerySelector from "../../utility/QuerySelector";
//----------------------------------------------------------
let loginDiv = GetElementById("login");

loginDiv.innerHTML += Username;

const usernameDiv = QuerySelector(".username");
const usernameInputField = QuerySelector("textarea", usernameDiv);

const AddPasswordDiv = () => {
	usernameInputField.addEventListener(
		"blur",
		(e) => {
			loginDiv.innerHTML += Password;
		},
		{ once: true },
	);
};

export default AddPasswordDiv;
