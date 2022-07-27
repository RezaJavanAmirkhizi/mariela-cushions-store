import axios from "../../api/axios";

const getProductsByFilter = (key, value) => (dispatch) => {
	axios
		.get(`http://localhost:3500/products?${key}=${value}`)
		.then((response) => {
			dispatch({
				type: "GET_PRODUCTS_BY_FILTER",
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export default getProductsByFilter;
