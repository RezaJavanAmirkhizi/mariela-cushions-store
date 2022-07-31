import axios from "./axios";

export const getCollections = async (setData) => {
	await axios
		.get("http://localhost:8000/Collections")
		.then((response) => {
			setData(response.data);
		})
		.catch((error) => {
			setData([]);
		});
};

