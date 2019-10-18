// const checkResponse = (response) => {
// 	if (response.status !== 200 && response.status !== 0) {
// 		console.error(`Error: status ${response.status}`);
// 	} else {
// 		// console.log(response.json());

// 		return response.json();
// 	}
// };

// const image = document.querySelector('.my-image');
// fetch('flowers.jpg').then(function(response) {
//   return response.blob();
// }).then(function(blob) {
//   const objectURL = URL.createObjectURL(blob);
//   image.src = objectURL;
// });

const getAvatar = (url) => {
	return fetch(url, {
		mode: "no-cors" // 'cors' by default
	})
		.then((res) => res.blob())
		.then((resBlob) => URL.createObjectURL(resBlob))

		.catch((err) => {
			throw new Error(`Fetch request failed`);
		});
};

export default getAvatar;
