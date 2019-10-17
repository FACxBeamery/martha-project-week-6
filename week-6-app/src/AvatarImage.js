import React from "react";

const AvatarImage = ({ eyes, nose, mouth, colour }) => {
	let url = `http://api.adorable.io/avatars/face/eyes${eyes}/nose${nose}/mouth${mouth}/${colour}`;
	return <img src={url}></img>;
};

export default AvatarImage;
