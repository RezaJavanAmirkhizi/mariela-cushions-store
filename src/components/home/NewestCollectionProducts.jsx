import Product from "../Product";
import { connect } from "react-redux";
import getProductsByFilter from "../../data/action/getProductsByFilter";
import { useState, useEffect } from "react";

function NewestCollectionProducts(props) {
	//Create this state to set products from api
	const [products, setProducts] = useState([]);

	useEffect(() => {
		props.getProductsByFilter("collection", "simple");
		setProducts(props.products);
	}, []);

	useEffect(() => {
		setProducts(props.products);
	}, [props.products]);

	return (
		<div className="products">
			{products.lengh !== 0
				? products.map((item) => {
						return (
							<Product
								key={item.id}
								id={item.id}
								image={item.image}
								name={item.name}
								price={item.price}
							/>
						);
				  })
				: ""}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { getProductsByFilter })(
	NewestCollectionProducts
);
