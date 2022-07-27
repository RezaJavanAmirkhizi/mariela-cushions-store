const productsReducer = (products = [], action) => {
	if (action.type === "GET_ALL_PRODUCTS") {
		return products.concat(action.payload);
	} else if (action.type === "GET_PRODUCTS_BY_FILTER") {
		return products.concat(action.payload);
	}  else {
		return products;
	}
};

export default productsReducer;
