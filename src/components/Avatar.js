import React, { useEffect } from "react";
import styles from "./Avatar.module.css";
import AvatarImage from "./AvatarImage";
import ChangeFeatureButton from "./ChangeFeatureButton";

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
	useEffect(() => {
		setTimeout(500);
		const newGameProgress = [
			eyes === answer[0],
			nose === answer[1],
			mouth === answer[2]
		];
		setGameProgress(newGameProgress);
	}, [eyes, nose, mouth, answer, setGameProgress]);

	const eyesNumbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
	const noseNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
	const mouthNumbers = [1, 10, 11, 3, 5, 6, 7, 9];

	const featuresObj = {
		eyes: {
			value: eyes,
			setFunction: setEyes,
			array: eyesNumbers,
			arrayIndex: 0,
			emoji: "👀"
		},
		nose: {
			value: nose,
			setFunction: setNose,
			array: noseNumbers,
			arrayIndex: 1,
			emoji: "👃"
		},
		mouth: {
			value: mouth,
			setFunction: setMouth,
			array: mouthNumbers,
			arrayIndex: 2,
			emoji: "👄"
		}
	};
	return (
		<form className={styles["form-div"]}>
			<div className={styles["buttons-div"]}>
				{["eyes", "nose", "mouth"].map((currentFeature) => {
					return (
						<ChangeFeatureButton
							key={currentFeature}
							feature={currentFeature}
							direction="Left"
							featuresObj={featuresObj}
							gameProgress={gameProgress}
						></ChangeFeatureButton>
					);
				})}
			</div>
			<AvatarImage
				eyes={eyes}
				nose={nose}
				mouth={mouth}
				colour={colour.substring(1)}
			></AvatarImage>
			<div className={styles["buttons-div"]}>
				{["eyes", "nose", "mouth"].map((currentFeature) => {
					return (
						<ChangeFeatureButton
							key={currentFeature}
							feature={currentFeature}
							direction="Right"
							featuresObj={featuresObj}
							gameProgress={gameProgress}
						></ChangeFeatureButton>
					);
				})}
			</div>
		</form>
	);
};

export default Avatar;
