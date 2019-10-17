import React from "react";
import styles from "./AvatarImage.module.css";

const AvatarImage = ({ eyes, nose, mouth, colour }) => {
	let url = `http://api.adorable.io/avatars/face/eyes${eyes}/nose${nose}/mouth${mouth}/${colour}`;
	return <img src={url} className={styles["image"]}></img>;
};

export default AvatarImage;
