import React from "react";
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
	setColour
}) => {
	const eyesNumbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
	const noseNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
	const mouthNumbers = [1, 10, 11, 3, 5, 6, 7, 9];
	const handleLeftClick = (event, value, setValue, numbersArray) => {
		event.preventDefault();

		// console.log("before left click", value);
		let previousIndex = numbersArray.indexOf(value) - 1;
		previousIndex =
			previousIndex < 0 ? numbersArray.length - 1 : previousIndex;

		setValue(numbersArray[previousIndex]);
		// console.log(eyes, nose, mouth);
		// console.log("after left click", value);
	};
	const handleRightClick = (event, value, setValue, numbersArray) => {
		event.preventDefault();
		let previousIndex = numbersArray.indexOf(value) + 1;
		previousIndex =
			previousIndex > numbersArray.length - 1 ? 0 : previousIndex;
		setValue(numbersArray[previousIndex]);
		// console.log(eyes, nose, mouth);
		// console.log("right click", value);
	};

	return (
		<form className={styles["form-div"]}>
			<div className={styles["buttons-div"]}>
				<button
					name="eyesLeft"
					className={styles["arrow-left"]}
					onClick={(event) =>
						handleLeftClick(event, eyes, setEyes, eyesNumbers)
					}
				/>
				<button
					name="noseLeft"
					className={styles["arrow-left"]}
					onClick={(event) =>
						handleLeftClick(event, nose, setNose, noseNumbers)
					}
				/>
				<button
					name="mouthLeft"
					className={styles["arrow-left"]}
					onClick={(event) =>
						handleLeftClick(event, mouth, setMouth, mouthNumbers)
					}
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
					className={styles["arrow-right"]}
					onClick={(event) =>
						handleRightClick(event, eyes, setEyes, eyesNumbers)
					}
				/>
				<button
					name="noseRight"
					className={styles["arrow-right"]}
					onClick={(event) =>
						handleRightClick(event, nose, setNose, noseNumbers)
					}
				/>
				<button
					name="mouthRight"
					className={styles["arrow-right"]}
					onClick={(event) =>
						handleRightClick(event, mouth, setMouth, mouthNumbers)
					}
				/>
			</div>
		</form>
	);
};

export default Avatar;
