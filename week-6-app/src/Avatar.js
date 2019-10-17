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
		const newGameProgress = [
			eyes == answer[0],
			nose == answer[1],
			mouth == answer[2]
		];
		console.log("answer=", answer);
		console.log("eyes", eyes, "eyes answer", answer[0]);
		console.log("nose", nose, "nose answer", answer[1]);
		console.log("mouth", mouth, "mouth answer", answer[2]);
		setGameProgress(newGameProgress);
	}, [eyes, nose, mouth]);

	return (
		<form className={styles["form-div"]}>
			<div className={styles["buttons-div"]}>
				<button
					name="eyesLeft"
					className={
						gameProgress[0]
							? styles["hidden-button"]
							: styles["arrow-left"]
					}
					onClick={(event) =>
						handleLeftClick(event, eyes, setEyes, eyesNumbers)
					}
					disabled={gameProgress[0]}
				/>
				<button
					name="noseLeft"
					className={
						gameProgress[1]
							? styles["hidden-button"]
							: styles["arrow-left"]
					}
					onClick={(event) =>
						handleLeftClick(event, nose, setNose, noseNumbers)
					}
					disabled={gameProgress[1]}
				/>
				<button
					name="mouthLeft"
					className={
						gameProgress[2]
							? styles["hidden-button"]
							: styles["arrow-left"]
					}
					onClick={(event) =>
						handleLeftClick(event, mouth, setMouth, mouthNumbers)
					}
					disabled={gameProgress[0]}
				/>
			</div>
			<AvatarImage
				eyes={eyes}
				nose={nose}
				mouth={mouth}
				colour="3e8893"
			/>
			<div className={styles["buttons-div"]}>
				<button
					name="eyesRight"
					className={
						gameProgress[0]
							? styles["hidden-button"]
							: styles["arrow-right"]
					}
					onClick={(event) =>
						handleRightClick(event, eyes, setEyes, eyesNumbers)
					}
					disabled={gameProgress[0]}
				/>
				<button
					name="noseRight"
					className={
						gameProgress[1]
							? styles["hidden-button"]
							: styles["arrow-right"]
					}
					onClick={(event) =>
						handleRightClick(event, nose, setNose, noseNumbers)
					}
					disabled={gameProgress[1]}
				/>
				<button
					name="mouthRight"
					className={
						gameProgress[2]
							? styles["hidden-button"]
							: styles["arrow-right"]
					}
					onClick={(event) =>
						handleRightClick(event, mouth, setMouth, mouthNumbers)
					}
					disabled={gameProgress[2]}
				/>
			</div>
		</form>
	);
};

export default Avatar;
