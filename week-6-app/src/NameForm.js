import React from "react";
import styles from "./NameForm.module.css";
const NameForm = ({ githubUser, setGithubUser }) => {
	return (
		<form className={styles["text-input"]}>
			<label htmlFor="githubUser" className={styles["form-label"]}>
				Please enter your github username:
			</label>
			<input
				type="text"
				id="githubUser"
				value={githubUser}
				onChange={(e) => setGithubUser(e.target.value)}
			></input>
		</form>
	);
};

export default NameForm;
