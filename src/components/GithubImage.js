import React from "react";
import getGithubPicture from "../utils/getGithubPicture";
import styles from "./GithubImage.module.css";
import newRandomAnswer from "../utils/newRandomAnswer";
const GithubImage = ({ githubUser, githubUrl, setGithubUrl, setAnswer }) => {
	React.useEffect(() => {
		getGithubPicture(`https://api.github.com/users/${githubUser}`)
			.then((data) => {
				if (data) {
					setGithubUrl(data.avatar_url);
					setAnswer(newRandomAnswer());
				} else {
					setGithubUrl(
						"https://avatars0.githubusercontent.com/u/36141893?v=4"
					);
				}
			})
			.catch(console.log("can't find this user!"));
	}, [githubUser, setAnswer, setGithubUrl]);

	if (!githubUrl) {
		return <h3>...Loading</h3>;
	}
	return (
		<img
			src={githubUrl}
			alt="Github user"
			className={styles["githubImage"]}
		/>
	);
};

export default GithubImage;
