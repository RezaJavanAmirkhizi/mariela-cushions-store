import { connect } from "react-redux";
import getAllProducts from "../data/actions/getAllProducts";
import { useState, useEffect } from "react";
import ProductPageHandler from "./ProductPageHandler";

function Products(props) {
	//Create this state to set products from api
	const [products, setProducts] = useState([]);

	useEffect(() => {
		props.getAllProducts();
		setProducts(props.products);
	}, []);

	useEffect(() => {
		setProducts(props.products);
	}, [props.products]);

	return <ProductPageHandler pageTitle="Products" products={products} />;
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { getAllProducts })(Products);
