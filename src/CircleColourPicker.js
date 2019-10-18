import { CirclePicker } from "react-color";
import React from "react";
import styles from "./CircleColourPicker.module.css";
const CircleColourPicker = ({ colour, setColour }) => {
	return (
		<CirclePicker
			color={colour.background}
			onSwatchHover={(color, event) => {
				setColour(color.hex);
			}}
			className={styles["circle-picker"]}
		/>
	);
};

export default CircleColourPicker;
