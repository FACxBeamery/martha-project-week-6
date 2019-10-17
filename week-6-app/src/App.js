import React, { useState } from "react";
import styles from "./App.module.css";
import NameForm from "./NameForm";
import Avatar from "./Avatar";
import GithubImage from "./GithubImage";

function App() {
	const [githubUser, setGithubUser] = useState("thomas-galligan");
	const [eyes, setEyes] = useState(3);
	const [nose, setNose] = useState(2);
	const [mouth, setMouth] = useState(1);
	const [colour, setColour] = useState("ffa500");
	const [githubUrl, setGithubUrl] = React.useState(
		`https://api.github.com/users/${githubUser}`
	);
	return (
		<div className={styles["root"]}>
			<h1>Create your avatar!</h1>
			<NameForm githubUser={githubUser} setGithubUser={setGithubUser} />
			<Avatar
				eyes={eyes}
				setEyes={setEyes}
				nose={nose}
				setNose={setNose}
				mouth={mouth}
				setMouth={setMouth}
				colour={colour}
				setColour={setColour}
			/>
			<GithubImage
				githubUser={githubUser}
				githubUrl={githubUrl}
				setGithubUrl={setGithubUrl}
			/>
		</div>
	);
}

export default App;
