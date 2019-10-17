import React from "react";
import styles from "./Instructions.module.css";
const Instructions = ({ gameProgress }) => {
	return gameProgress.every(Boolean) ? (
		<h2 className={styles["success-text"]}>
			{" "}
			Well done! I can barely tell the difference{" "}
		</h2>
	) : (
		<h2 className={styles["instruction-text"]}>
			This looks nothing like you! <br />
			Keep changing the features until it does.
		</h2>
	);
};

export default Instructions;
