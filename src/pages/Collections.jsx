import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { connect } from "react-redux";
import ProductPageHandler from './ProductPageHandler';
import getProductsByFilter from "../data/actions/getProductsByFilter";

function Collections(props) {
	//Get id from query string
	const { collection_name } = useParams();

    //Create this state to set products from api
	const [products, setProducts] = useState([]);

    useEffect(() => {
		props.getProductsByFilter("collection", collection_name);
		setProducts(props.products);
	}, []);

	useEffect(() => {
		setProducts(props.products);
	}, [props.products]);

    return (
        <ProductPageHandler pageTitle={collection_name} products={products} />
    )
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { getProductsByFilter })(Collections);
