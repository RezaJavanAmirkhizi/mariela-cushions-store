import Product from "../components/Product";
import { connect } from "react-redux";
import getAllProducts from "../data/action/getAllProducts";
import { useState, useEffect } from "react";

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

	return (
		<>
			<div className="page-title">
				<h1>Products</h1>
			</div>
			<div className="products">
				{products.length !== 0
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
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { getAllProducts })(Products);
