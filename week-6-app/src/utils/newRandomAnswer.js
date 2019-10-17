const eyesNumbers = [2, 3, 4, 5, 6, 7, 9, 10];
const noseNumbers = [3, 4, 5, 6, 7, 8, 9];
const mouthNumbers = [10, 11, 3, 5, 6, 7, 9];
const newRandomAnswer = () => {
	const eyeAnswer =
		eyesNumbers[Math.floor(Math.random() * eyesNumbers.length)];
	const noseAnswer =
		noseNumbers[Math.floor(Math.random() * noseNumbers.length)];
	const mouthAnswer =
		mouthNumbers[Math.floor(Math.random() * mouthNumbers.length)];
	return [eyeAnswer, noseAnswer, mouthAnswer];
};

export default newRandomAnswer;
