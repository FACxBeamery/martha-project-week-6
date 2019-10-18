import React, { useEffect } from "react";
import styles from "./Avatar.module.css";
import AvatarImage from "./AvatarImage";

const Avatar = ({
	eyes,
	setEyes,
	nose,
	setNose,
	mouth,
	setMouth,
	colour,
	setColour,
	gameProgress,
	setGameProgress,
	answer
}) => {
	const eyesNumbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
	const noseNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
	const mouthNumbers = [1, 10, 11, 3, 5, 6, 7, 9];
	const handleLeftClick = (event, value, setValue, numbersArray) => {
		event.preventDefault();
		let previousIndex = numbersArray.indexOf(value) - 1;
		previousIndex =
			previousIndex < 0 ? numbersArray.length - 1 : previousIndex;

		setValue(numbersArray[previousIndex]);
	};
	const handleRightClick = (event, value, setValue, numbersArray) => {
		event.preventDefault();
		let previousIndex = numbersArray.indexOf(value) + 1;
		previousIndex =
			previousIndex > numbersArray.length - 1 ? 0 : previousIndex;
		setValue(numbersArray[previousIndex]);
	};

	useEffect(() => {
		setTimeout(500);
		const newGameProgress = [
			eyes === answer[0],
			nose === answer[1],
			mouth === answer[2]
		];
		console.log("answer=", answer);
		console.log("eyes", eyes, "eyes answer", answer[0]);
		console.log("nose", nose, "nose answer", answer[1]);
		console.log("mouth", mouth, "mouth answer", answer[2]);
		setGameProgress(newGameProgress);
	}, [eyes, nose, mouth, answer]);

	return (
		<form className={styles["form-div"]}>
			<div className={styles["buttons-div"]}>
				<button
					name="eyesLeft"
					className={styles["arrow-left"]}
					onClick={(event) =>
						handleLeftClick(event, eyes, setEyes, eyesNumbers)
					}
					disabled={gameProgress[0]}
				>
					{gameProgress[0] ? "✅" : "👀 ⬅"}
				</button>
				<button
					name="noseLeft"
					className={styles["arrow-left"]}
					onClick={(event) =>
						handleLeftClick(event, nose, setNose, noseNumbers)
					}
					disabled={gameProgress[1]}
				>
					{gameProgress[1] ? "✅" : "👃 ⬅"}
				</button>
				<button
					name="mouthLeft"
					className={styles["arrow-left"]}
					onClick={(event) =>
						handleLeftClick(event, mouth, setMouth, mouthNumbers)
					}
					disabled={gameProgress[2]}
				>
					{gameProgress[2] ? "✅" : "👄 ⬅"}
				</button>
			</div>
			<AvatarImage
				eyes={eyes}
				nose={nose}
				mouth={mouth}
				colour={colour.substring(1)}
			/>
			<div className={styles["buttons-div"]}>
				<button
					name="eyesRight"
					className={styles["arrow-right"]}
					onClick={(event) =>
						handleRightClick(event, eyes, setEyes, eyesNumbers)
					}
					disabled={gameProgress[0]}
				>
					{gameProgress[0] ? "✅" : "➡ 👀"}
				</button>
				<button
					name="noseRight"
					className={styles["arrow-right"]}
					onClick={(event) =>
						handleRightClick(event, nose, setNose, noseNumbers)
					}
					disabled={gameProgress[1]}
				>
					{gameProgress[1] ? "✅" : "➡ 👃"}
				</button>
				<button
					name="mouthRight"
					className={styles["arrow-right"]}
					onClick={(event) =>
						handleRightClick(event, mouth, setMouth, mouthNumbers)
					}
					disabled={gameProgress[2]}
				>
					{gameProgress[2] ? "✅" : "➡ 👄"}
				</button>
			</div>
		</form>
	);
};

export default Avatar;
