import instance from "../../api/axios";

const getAllProducts = () => async (dispatch) => {
	await instance
		.get("/products")
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
