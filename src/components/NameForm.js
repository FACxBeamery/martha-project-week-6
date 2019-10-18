import React, { useState } from "react";
import styles from "./NameForm.module.css";

const NameForm = ({ githubUser, setGithubUser }) => {
	const [nameInput, setNameInput] = useState("");
	const [usernameValid, setUsernameValid] = useState(true);
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
			setUsernameValid(usernameRegex.test(nameInput));
			if (usernameValid) {
				setGithubUser(nameInput);
			}
		}
	};
	return (
		<form className={styles["username-form"]} onSubmit={handleSubmit}>
			<div className={styles["text-input"]}>
				<label htmlFor="githubUser" className={styles["form-label"]}>
					Please enter your github username:
				</label>
				<input
					type="text"
					id="githubUser"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
					className={
						usernameValid
							? styles["input-box"]
							: styles["invalid-input"]
					}
				></input>
				{usernameValid ? null : (
					<div className={styles["invalid-input-text"]}>
						This doesn't look like a valid github username!{" "}
					</div>
				)}
			</div>
			<button
				type="submit"
				name="submitUser"
				className={styles["button"]}
			>
				Submit
			</button>
		</form>
	);
};

export default NameForm;
