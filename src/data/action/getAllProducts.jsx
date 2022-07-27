import axios from "../../api/axios";

const getAllProducts = () => (dispatch) => {
	axios
		.get("http://localhost:3500/products")
		.then((response) => {
			dispatch({
				type: "GET_ALL_PRODUCTS",
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export default getAllProducts;
