import instance from '../../api/axios';

const getProductsByFilter = (key, value) => async (dispatch) => {
	await instance
		.get(`/products?${key}=${value}`)
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
