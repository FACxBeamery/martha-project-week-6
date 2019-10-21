import React from "react";
import styles from "./ChangeFeatureButton.module.css";
const handleClick = (direction, event, value, setValue, numbersArray) => {
	event.preventDefault();

	let previousIndex =
		direction === "Left"
			? numbersArray.indexOf(value) - 1
			: numbersArray.indexOf(value) + 1;

	previousIndex = previousIndex < 0 ? numbersArray.length - 1 : previousIndex;

	setValue(numbersArray[previousIndex]);
};

const ChangeFeatureButton = ({
	feature,
	direction,
	featuresObj,
	gameProgress
}) => {
	const featureGameProgress = gameProgress[featuresObj[feature].arrayIndex];
	const featureEmoji = featuresObj[feature].emoji;
	return (
		<>
			<label
				htmlFor={`${feature}${direction}`}
				className={styles["visually-hidden"]}
			>
				{`Click here to get${
					direction === "Left" ? "previous" : "next"
				} ${feature}`}
			</label>
			<button
				name={`${feature}${direction}`}
				className={styles[`arrow-${direction.toLowerCase()}`]}
				onClick={(e) =>
					handleClick(
						direction,
						e,
						featuresObj[feature].value,
						featuresObj[feature].setFunction,
						featuresObj[feature].array
					)
				}
				disabled={featureGameProgress}
			>
				{featureGameProgress
					? "✅"
					: `${
							direction === "Left"
								? featureEmoji + " ⬅"
								: "➡ " + featureEmoji
					  }`}
			</button>
		</>
	);
};

export default ChangeFeatureButton;
