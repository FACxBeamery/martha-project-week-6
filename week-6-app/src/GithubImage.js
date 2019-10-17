import React from "react";
import getGithubPicture from "./utils/getGithubPicture";
import styles from "./GithubImage.module.css";
const GithubImage = ({ githubUser, githubUrl, setGithubUrl }) => {
	React.useEffect(() => {
		getGithubPicture(`https://api.github.com/users/${githubUser}`)
			.then((data) => {
				if (data) {
					setGithubUrl(data.avatar_url);
				} else {
					setGithubUrl(
						"https://avatars0.githubusercontent.com/u/36141893?v=4"
					);
				}
			})
			.catch(console.log("can't find this user!"));
	}, [githubUser]);

	if (!githubUrl) {
		return <h3>...Loading</h3>;
	}
	return <img src={githubUrl} className={styles["githubImage"]} />;
};

export default GithubImage;
