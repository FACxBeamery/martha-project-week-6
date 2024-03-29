import React, { useState } from "react";
import styles from "./App.module.css";
import NameForm from "./components/NameForm";
import Avatar from "./components/Avatar";
import GithubImage from "./components/GithubImage";
import Instructions from "./components/Instructions";
import CircleColourPicker from "./components/CircleColourPicker";
function App() {
	const [githubUser, setGithubUser] = useState("thomas-galligan");
	const [eyes, setEyes] = useState(3);
	const [nose, setNose] = useState(2);
	const [mouth, setMouth] = useState(1);
	const [colour, setColour] = useState("#ffa500");
	const [githubUrl, setGithubUrl] = useState(
		`https://api.github.com/users/${githubUser}`
	);
	const [gameProgress, setGameProgress] = useState([false, false, false]);
	const [answer, setAnswer] = useState([6, 5, 3]);

	return (
		<div className={styles["root"]}>
			<h1>Find your lookalike avatar!</h1>

			<NameForm githubUser={githubUser} setGithubUser={setGithubUser} />

			<Instructions gameProgress={gameProgress} />

			<CircleColourPicker colour={colour} setColour={setColour} />
			<Avatar
				eyes={eyes}
				setEyes={setEyes}
				nose={nose}
				setNose={setNose}
				mouth={mouth}
				setMouth={setMouth}
				colour={colour}
				setColour={setColour}
				answer={answer}
				gameProgress={gameProgress}
				setGameProgress={setGameProgress}
			/>
			<GithubImage
				githubUser={githubUser}
				githubUrl={githubUrl}
				setGithubUrl={setGithubUrl}
				setAnswer={setAnswer}
			/>
		</div>
	);
}

export default App;
