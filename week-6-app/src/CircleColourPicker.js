import { CirclePicker } from "react-color";
import React from "react";
import styles from "./CircleColourPicker.module.css";
const CircleColourPicker = ({ colour, setColour }) => {
	const handleChangeComplete = (colour) => {
		this.setColour({ background: colour.hex });
	};
	return (
		<CirclePicker
			color={colour.background}
			onSwatchHover={(color, event) => {
				console.log(event.target);
				console.log("hi im here");
				setColour(color.hex);
				console.log(colour);
			}}
			className={styles["circle-picker"]}
		/>
	);
};

export default CircleColourPicker;
